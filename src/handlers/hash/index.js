import fs from "fs";
import { createHash } from "crypto";
import { pipeline } from "stream/promises";

const hash = async (path) => {
  try {
    const readStream = fs.createReadStream(path, { encoding: "utf8" });
    const hash = createHash("sha256");
    await pipeline(readStream, hash.setEncoding("hex"), process.stdout, {
      end: false,
    });
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default hash;
