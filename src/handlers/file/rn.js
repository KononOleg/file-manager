import fs from "fs/promises";

const rn = async (path, filename) => {
  try {
    await fs.rename(path, filename);
    process.stdout.write(`\nFile renamed successfully!\n`);
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default rn;
