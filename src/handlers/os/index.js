import os from "os";

const osInfo = async (type) => {
  const { write } = process.stdout;

  try {
    switch (type) {
      case "EOL":
        write("\n" + "EOL: " + JSON.stringify(os.EOL));
        break;
      case "cpus":
        const result = [];
        os.cpus().map(({ model, speed }) => {
          result.push({
            Model: model,
            "Clock rate (GHz)": speed / 1000,
          });
        });
        console.table(result);
        break;
      case "homedir":
        write(`\nHomedir: ${os.homedir}\n`);
        break;
      case "username":
        write(`\nUsername: ${os.userInfo().username}\n`);
        break;
      case "architecture":
        write(`\nArchitecture: ${os.arch}\n`);
        break;
      default:
        write("\nOperation failed\n");
    }
  } catch {
    write("\nOperation failed\n");
  }
};
export default osInfo;
