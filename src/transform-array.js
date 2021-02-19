const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed_arr = [];

  if (arr.length === 0) return [];

  for (let index = 0; index < arr.length; index++) {

    if (arr[index] === '--double-prev') {
      if (arr[index - 1] === undefined) continue;
      if (arr[index - 2] === '--discard-next') continue;
      transformed_arr.push(arr[index - 1]);
    } else
    if (arr[index] === '--double-next') {
      if (arr[index + 1] === undefined) continue;
      transformed_arr.push(arr[index + 1]);
    } else
    if (arr[index] === '--discard-next') {
      index++;
    } else
    if (arr[index] === '--discard-prev') {
      if (!arr[0]) continue;
      if (arr[index - 2] === '--discard-next') continue;
      transformed_arr.pop();
    } else
    if (arr[index] !== '--discard-prev' || arr[index] !== '--discard-next' || arr[index] !== '--double-next' || arr[index] !== '--double-prev')
      transformed_arr.push(arr[index]);

  }

  return transformed_arr;
};