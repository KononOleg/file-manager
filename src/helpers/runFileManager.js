import readline from "readline";
import add from "../handlers/file/add.js";
import cat from "../handlers/file/cat.js";
import cp from "../handlers/file/cp.js";
import mv from "../handlers/file/mv.js";
import rm from "../handlers/file/rm.js";
import rn from "../handlers/file/rn.js";
import hash from "../handlers/hash/index.js";
import navigation from "../handlers/nwd/navigation.js";
import workingDirectory from "../handlers/nwd/workingDirectory.js";
import osInfo from "../handlers/os/index.js";
import compress from "../handlers/zip/compress.js";
import decompress from "../handlers/zip/decompress .js";
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

      case input.startsWith("cat "):
        await cat(pathResolve(input, currentDirectory));
        break;
      case input.startsWith("add "):
        await add(pathResolve(input, currentDirectory));
        break;
      case input.startsWith("rm "):
        await rm(pathResolve(input, currentDirectory));
        break;
      case input.startsWith("rn "):
        await rn(
          pathResolve(input, currentDirectory),
          pathResolve(input, currentDirectory, 2)
        );
        break;
      case input.startsWith("cp "):
        await cp(
          pathResolve(input, currentDirectory),
          pathResolve(input, currentDirectory, 2)
        );
        break;
      case input.startsWith("mv "):
        await mv(
          pathResolve(input, currentDirectory),
          pathResolve(input, currentDirectory, 2)
        );
        break;

      case input === "os --EOL":
        osInfo("EOL");
        break;
      case input === "os --cpus":
        osInfo("cpus");
        break;
      case input === "os --homedir":
        osInfo("homedir");
        break;
      case input === "os --username":
        osInfo("username");
        break;
      case input === "os --architecture":
        osInfo("architecture");
        break;

      case input.startsWith("hash "):
        await hash(pathResolve(input, currentDirectory));
        break;

      case input.startsWith("compress "):
        await compress(
          pathResolve(input, currentDirectory),
          pathResolve(input, currentDirectory, 2)
        );
        break;

      case input.startsWith("decompress "):
        await decompress(
          pathResolve(input, currentDirectory),
          pathResolve(input, currentDirectory, 2)
        );
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
