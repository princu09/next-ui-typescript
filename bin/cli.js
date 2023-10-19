#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log("Failed to run command " + command + " " + error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];

if (!repoName) {
  console.log("Please specify the project directory:");
  console.log(`npx @northfoxgroup/next-ui-typescript ${repoName}`);
  console.log("For example:");
  console.log(`npx @northfoxgroup/next-ui-typescript my-nextjs-app`);
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/princu09/next-ui-typescript.git ${repoName} && rm -rf ${repoName}/.git`;

console.log(`Creating a new Next.js project in ${repoName}...`);

const gitCheckout = runCommand(gitCheckoutCommand);

if (!gitCheckout) {
  console.log("Git checkout failed");
  process.exit(1);
}

console.log(`Installing dependencies... for ${repoName}`);

const installDependencies = runCommand(`cd ${repoName} && npm install`);

if (!installDependencies) {
  console.log("Installing dependencies failed");
  process.exit(1);
}

console.log(
  "\nNote Change Package Name in Package.json and also change the name in the package-lock.json file"
);
console.log("\nCongrats! Your Next.js project is ready! 🚀");
console.log("\nTo get started:");
console.log("\ncd ${repoName} && npm run dev");
