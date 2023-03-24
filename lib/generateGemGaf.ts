import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import cliProgress from 'cli-progress';
import geojsonvt from "geojson-vt";
import vtpbf from "vt-pbf";

const MAX_ZOOM = 12;
const BATCH_SIZE = 50;

const supabase = createClient(
    process.env.SUPABASE_PROD_API_URL!,
    process.env.SUPABASE_PROD_KEY!
);

const getVectorTiles = async () => {
  const { data } = await axios.get(
      "https://github.com/GEMScienceTools/gem-global-active-faults/raw/master/geojson/gem_active_faults_harmonized.geojson"
  );
  return geojsonvt(data, {
    maxZoom: MAX_ZOOM,
    buffer: 64,
  });
}

async function* tileIterator() {
  let tileIndices: { z: number, x: number, y: number }[] = []
  for (let z = 0; z <= MAX_ZOOM; z++) {
    console.log(`z=${z}`);
    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    const maxProgress = Math.pow(2, z) * Math.pow(2, z);
    progress.start(maxProgress, 0);
    for (let x = 0; x < Math.pow(2, z); x++) {
      for (let y = 0; y < Math.pow(2, z); y++) {
        tileIndices.push({z, x, y});
        if (tileIndices.length == BATCH_SIZE) {
          progress.update(x * Math.pow(2, z) + y);
          yield tileIndices;
          tileIndices = [];
        }
      }
    }
    progress.update(maxProgress)
    progress.stop();
  }
  if (tileIndices.length) {
    yield tileIndices;
  }
}

const buildTileRequest = (vectorTiles: any, z: number, x: number, y: number) => {
  const tileData = vectorTiles.getTile(z, x, y);
  const fileName = `${y}.pbf`;
  const filePath = `/${z}/${x}/${fileName}`;
  if (tileData?.features && tileData?.features?.length > 0) {
    const buff = vtpbf.fromGeojsonVt({geojsonLayer: tileData});
    const buffer = Buffer.from(buff);

    return () => {
      // console.log(z, x, y);
      return supabase.storage
          .from('pbf-test-uk')
          .upload(filePath, buffer, {
            upsert: true,
            cacheControl: `public, max-age=${60 * 60 * 24}`, // set cache control header for the tile
          });
    }
  }
  return () => null;
}

const generateGemGaf = async () => {

  const vectorTiles = await getVectorTiles();
  const generator = tileIterator();
  let indices = await generator.next();
  const errors: any[] = [];
  while(!indices.done) {
    const requests = indices.value.map(v => buildTileRequest(vectorTiles, v.z, v.x, v.y)())
        .filter(r => r != null)
    await Promise.all(requests).then(responses => {
      errors.push(...responses.filter(r => r?.error != null))
    });
    indices = await generator.next();
  }
  console.error(errors);
};

generateGemGaf().then(r => console.log(r));
