import readline from "readline";
import navigation from "../handlers/nwd/navigation.js";
import workingDirectory from "../handlers/nwd/workingDirectory.js";
import getUsername from "./getUsername.js";
import pathResolve from "./path.js";

const runFileManager = async () => {
  let currentDirectory = process.env.HOME;
  const userName = getUsername(currentDirectory);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (input) => {
    switch (true) {
      case input === ".exit":
        rl.close();
        break;

      case input === "up":
        currentDirectory = await navigation(
          pathResolve("..", currentDirectory)
        );
        break;
      case input.startsWith("cd "):
        currentDirectory = await navigation(
          pathResolve(input, currentDirectory),
          currentDirectory
        );
        break;
      case input === "ls":
        await workingDirectory(currentDirectory);
        break;

      default:
        process.stdout.write("\nInvalid input\n");
        break;
    }
    return process.stdout.write(`\nYou are currently in ${currentDirectory}\n`);
  });

  process.on("exit", () => {
    process.stdout.write(
      `\nThank you for using File Manager, ${userName}, goodbye!\n`
    );
  });
};
export default runFileManager;
