const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  let current_month = date.getUTCMonth() + 1;
  if (current_month === 12 || current_month === 1 || current_month === 2) {
    return "winter";
  }
  if (current_month === 3 || current_month === 4 || current_month === 5) {
    return "spring";
  }
  if (current_month === 6 || current_month === 7 || current_month === 8) {
    return "summer";
  }
  if (current_month === 9 || current_month === 10 || current_month === 11) {
    return "autumn";
  }
};