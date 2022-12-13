const getUsername = (currentDirectory) => {
  let username = process.argv[2] || "";
  username = username.includes("--username=")
    ? username.split("=")[1]
    : "Stranger";
  process.stdout.write(`Welcome to the File Manager, ${username}!\n`);
  process.stdout.write(`You are currently in ${currentDirectory}\n`);

  return username;
};
export default getUsername;
