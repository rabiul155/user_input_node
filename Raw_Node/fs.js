const fs = require("fs");

// fs.writeFileSync("people.txt", "Here I am ");

// read file in sync way (not recommended)
// const message = fs.readFileSync("people.txt");
// console.log(message.toString());

// async way how to read a file
fs.readFile("people.txt", (err, data) => {
  console.log(data.toString());
});
