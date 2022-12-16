import fs from "fs";
import { join, parse } from "path";
import { pipeline } from "stream/promises";
import { createBrotliCompress } from "zlib";

const compress = async (path, destinationPath) => {
  try {
    const fileName = `${parse(path).name}.br`;
    const readStream = fs.createReadStream(path);
    const brotliCompress = createBrotliCompress();
    const writeStream = fs.createWriteStream(join(destinationPath, fileName));
    await pipeline(readStream, brotliCompress, writeStream);
    process.stdout.write("\nFile compressed successfully!\n");
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default compress;
