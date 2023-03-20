import fs from "fs";
import https from "https";
import path from "path";

const downloadGemGaf = () => {
  const file = fs.createWriteStream(
    path.join(process.cwd(), "public", "gem_active_faults.geojson")
  );
  https.get(
    "https://raw.githubusercontent.com/depremguvenligi/gem-global-active-faults/master/geojson/gem_active_faults.geojson",
    (response) => {
      response.pipe(file);

      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        console.log("Download Completed");
      });
    }
  );
};

downloadGemGaf();
