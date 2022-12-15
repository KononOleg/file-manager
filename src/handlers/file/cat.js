import fs from "fs";
import { pipeline } from "stream/promises";

const cat = async (path) => {
  try {
    const readStream = fs.createReadStream(path, { encoding: "utf8" });
    await pipeline(readStream, process.stdout, { end: false });
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default cat;
