import * as readline from "readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    userInput.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function checking(w) {
  if (w > 2 && w % 2 === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

async function main() {
  const number = await prompt("enter your number : ");
  const result = checking(parseInt(number));
  console.log(result);
}
main();
