const navigation = async (path, currentDirectory) => {
  try {
    process.chdir(path);
    return path;
  } catch (err) {
    process.stdout.write("\nOperation failed\n");
    return currentDirectory;
  }
};
export default navigation;
