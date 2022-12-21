import os from "os";

const osInfo = async (type) => {
  try {
    switch (type) {
      case "EOL":
        process.stdout.write("\n" + "EOL: " + JSON.stringify(os.EOL));
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
        process.stdout.write(`\nHomedir: ${os.homedir}\n`);
        break;
      case "username":
        process.stdout.write(`\nUsername: ${os.userInfo().username}\n`);
        break;
      case "architecture":
        process.stdout.write(`\nArchitecture: ${os.arch}\n`);
        break;
      default:
        process.stdout.write("\nOperation failed\n");
    }
  } catch {
    process.stdout.write("\nOperation failed\n");
  }
};
export default osInfo;
