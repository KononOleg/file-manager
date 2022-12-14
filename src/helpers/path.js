import { resolve } from "path";

const pathResolve = (input, currentDirectory) => {
  const path = input.split(" ")[1] || input;
  return resolve(currentDirectory, path);
};
export default pathResolve;
