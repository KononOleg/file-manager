import { unlink } from "fs/promises";
import fs from "fs";
import { join, basename } from "path";
import { pipeline } from "stream/promises";

const mv = async (path, newPath) => {
  try {
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(join(newPath, basename(path)));
    await pipeline(readStream, writeStream);
    unlink(path);
    process.stdout.write("\nFile moved successfully!\n");
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default mv;
