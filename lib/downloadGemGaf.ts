import axios from "axios";
import fs from "fs";
import path from "path";

const downloadGemGaf = () =>
  axios
    .get(
      "https://raw.githubusercontent.com/depremguvenligi/gem-global-active-faults/master/geojson/gem_active_faults.geojson"
    )
    .then((response) => {
      fs.writeFileSync(
        path.join(process.cwd(), "public", "gem_active_faults.geojson"),
        JSON.stringify(response.data)
      );
    })
    .catch((error) => {
      console.log(error);
    });

downloadGemGaf();
