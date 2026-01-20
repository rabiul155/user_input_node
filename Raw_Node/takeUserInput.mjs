import * as readline from "readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    userInput.question(question, (input) => {
      resolve(input);
    });
  });
}

async function main() {
  const name = await prompt("Name of account holder:");
  console.log("your user name is" + name);
  return;
}

main();
