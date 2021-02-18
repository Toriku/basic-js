const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  let finalActivity = Number(sampleActivity);

  if (finalActivity !== Number) {
    return false;
  }
  output = Math.log(MODERN_ACTIVITY / finalActivity) / (0.693 / HALF_LIFE_PERIOD);
  return output;
};