const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  min_turns = (2 ** disksNumber) - 1;
  seconds = Math.floor(3600 / turnsSpeed * min_turns);

  return {
    "turns": min_turns,
    "seconds": seconds
  };
};