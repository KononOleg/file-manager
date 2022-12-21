import fs from "fs/promises";

const rm = async (path) => {
  try {
    await fs.unlink(path);
    process.stdout.write(`\nFile deleted successfully!\n`);
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default rm;
