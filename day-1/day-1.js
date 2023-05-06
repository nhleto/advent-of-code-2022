const fs = require("fs").promises;
const path = require("path");

async function day1() {
  const input = await fs.readFile(path.resolve(__dirname, "./input.txt"));
  const data = input
    .toString()
    .split("\n\n")
    .map((col) => [col.replace(/\n/g, " ")].map((x) => x.split(" ")).flat());

  const result = data.map((col) =>
    col.reduce((acc, cur) => (acc += parseInt(cur)), 0)
  );

  // const big = Math.max(...result);

  // console.log(big);

  const big3 = result
    .sort((a, b) => (a > b ? -1 : 1))
    .splice(0, 3)
    .reduce((acc, cur) => (acc += cur));
  console.log(big3);
}

day1();
