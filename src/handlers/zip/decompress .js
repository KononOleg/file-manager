import fs from "fs";
import { join, parse } from "path";
import { pipeline } from "stream/promises";
import { createBrotliDecompress } from "zlib";

const decompress = async (path, destinationPath) => {
  try {
    const fileName = `${parse(path).name}.txt`;
    const readStream = fs.createReadStream(path);
    const brotliDecompress = createBrotliDecompress();
    const writeStream = fs.createWriteStream(join(destinationPath, fileName));
    await pipeline(readStream, brotliDecompress, writeStream);
    process.stdout.write("\nFile decompressed successfully!\n");
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default decompress;
