#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`Failed to execute ${command}`, err);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCloneCommand = `git clone --depth 1 https://github.com/DavidHDev/tailwind-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the ${repoName} repository...`);
const checkedOut = runCommand(gitCloneCommand)

if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

console.log(`All done! Have fun using ${repoName} 🚀`);
console.log('----- NEXT STEPS -----');
console.log(`cd ${repoName}`)
console.log('npm run dev')