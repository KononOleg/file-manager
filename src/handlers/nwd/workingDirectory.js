import { readdir } from "fs/promises";
import { extname } from "path";

const workingDirectory = async (currentDirectory) => {
  try {
    const result = [];
    const files = await readdir(currentDirectory);

    for (const fileName of files) {
      result.push({
        Name: fileName,
        Type: !!extname(`${currentDirectory}/${fileName}`)
          ? "file"
          : "directory",
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
