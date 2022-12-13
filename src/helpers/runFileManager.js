import readline from "readline";
import getUsername from "./getUsername.js";

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
