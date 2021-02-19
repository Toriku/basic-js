const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes =
    options.repeatTimes === undefined ? "1" : options.repeatTimes;

  let separator = options.separator === undefined ? "+" : options.separator;

  let addition = options.addition === undefined ? "" : options.addition;

  let additionSeparator = options.additionSeparator === undefined ? "|" : options.additionSeparator;

  let additionRepeatTimes = options.additionRepeatTimes === undefined ?
    "1" : options.additionRepeatTimes;

  let additionPattern = addition === "" ? "" : `${addition}${additionSeparator}`
    .repeat(additionRepeatTimes).slice(0, -additionSeparator.length);

  return `${str}${additionPattern}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
};