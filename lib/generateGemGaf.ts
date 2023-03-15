import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import geojsonvt from "geojson-vt";
import vtpbf from "vt-pbf";

const generateGemGaf = async () => {
  const { data } = await axios.get(
    "https://github.com/GEMScienceTools/gem-global-active-faults/raw/master/geojson/gem_active_faults_harmonized.geojson"
  );
  const supabase = createClient(
    process.env.SUPABASE_PROD_API_URL!,
    process.env.SUPABASE_PROD_KEY!
  );

  const maxZoom = 12;
  const buffer = 64;

  const vectorTiles = geojsonvt(data, {
    maxZoom,
    buffer,
  });

  for (let z = 0; z <= maxZoom; z++) {
    for (let x = 0; x < Math.pow(2, z); x++) {
      for (let y = 0; y < Math.pow(2, z); y++) {
        const tileData = vectorTiles.getTile(z, x, y);
        const fileName = `${y}.pbf`;
        const filePath = `/${z}/${x}/${fileName}`;
        debugger;
        if (tileData?.features && tileData?.features?.length > 0) {
          const buff = vtpbf.fromGeojsonVt({ geojsonLayer: tileData });
          const buffer = Buffer.from(buff);

          const res = await supabase.storage
            .from(process.env.SUPABASE_GEMGAF_BUCKET!)
            .upload(filePath, buffer, {
              upsert: true,
              cacheControl: `public, max-age=${60 * 60 * 24}`, // set cache control header for the tile
            });
          if (res.error) console.log(res.error);
          else console.log(`Uploaded ${res.data?.path}`);
        }
      }
    }
  }
};

generateGemGaf();
