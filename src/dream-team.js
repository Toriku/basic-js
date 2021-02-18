const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let trimmed_arr = []
  let output = "";

  for (let member of members) {
    if (typeof member === "string") {
      member = member.trim()
      trimmed_arr.push(member.trim()[0].toUpperCase());
    }

  }
  trimmed_arr = trimmed_arr.sort();

  for (let letter of trimmed_arr) {
    output += letter;
  }
  return output;
};