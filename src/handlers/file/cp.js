import fs from "fs";
import { join, basename } from "path";

const cp = async (path, newPath) => {
  try {
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(join(newPath, basename(path)));
    readStream.pipe(writeStream);
    process.stdout.write("\nFile copied successfully!\n");
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default cp;
