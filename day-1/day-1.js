const fs = require("fs");

const text = fs.readFile("./input.txt", (err, data) => {
  const bunch = data.join("/n");
  console.log(bunch);
});
