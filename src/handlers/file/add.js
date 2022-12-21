import fs from "fs/promises";

const add = async (path) => {
  try {
    await fs.writeFile(path, "", { encoding: "utf8" });
    process.stdout.write(`\nFile added successfully!\n`);
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default add;
