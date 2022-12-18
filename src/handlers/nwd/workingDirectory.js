import { readdir, stat } from "fs/promises";
const workingDirectory = async (currentDirectory) => {
  try {
    const result = [];
    const files = await readdir(currentDirectory);

    for (const fileName of files) {
      const stats = await stat(`${currentDirectory}/${fileName}`);
      result.push({
        Name: fileName,
        Type: stats.isFile() ? "file" : "directory",
      });
    }

    result.length
      ? console.table(
          result.sort().sort((a, b) => a.Type.localeCompare(b.Type))
        )
      : process.stdout.write("\nThis folder is empty\n");
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default workingDirectory;
