import { resolve } from "path";

const pathResolve = (input, currentDirectory, argvIndex = 1) => {
  const path = input.split(" ")[argvIndex];
  return resolve(currentDirectory, path);
};

export default pathResolve;
