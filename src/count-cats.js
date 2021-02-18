const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let total = 0;
  for (let item of matrix) {
    for (let cat of item) {
      if (cat === "^^") {
        total++;
      }
    }
  }
  return total;
};