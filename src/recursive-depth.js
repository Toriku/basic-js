const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.some((array) => Array.isArray(array))) {
      return 1;
    } else {
      return 1 + this.calculateDepth(arr.flat());
    }
  }
};