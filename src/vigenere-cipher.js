const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  typeOfMachine = true;
  letters = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");

  constructor(type = true) {
    this.typeOfMachine = type;
  }

  encrypt(message, key) {
    let output = [];
    if (!message || !key) throw new Error('Message and key parameters are mandatory.');
    key = this.transformKeyString(message, key);
    let key_array = key.toUpperCase().split("");
    let iteration = 0;
    message.toUpperCase().split("").forEach((element, i) => {
      let indexMessageChar = this.letters.indexOf(element);
      if (indexMessageChar < 0) {
        output.push(element);
      } else {
        let indexKeyChar = this.letters.indexOf(key_array[iteration]);
        output.push(this.letters[(indexMessageChar + indexKeyChar) % this.letters.length]);
        iteration++;
      }
    });
    if (!this.typeOfMachine) return output.reverse().join('');
    return output.join('');
  }

  transformKeyString(message, key) {
    let message_length = message.length;
    let key_length = key.length;
    let times = message.length / key_length + 1;
    key = key.repeat(times).substr(0, message_length);
    return key;
  }

  decrypt(message, key) {
    let output = [];
    if (!message || !key) throw new Error('Message and key parameters are mandatory.');
    key = this.transformKeyString(message, key);
    let key_array = key.toUpperCase().split("");
    let iteration = 0;
    message.toUpperCase().split("").forEach((element, i) => {
      let indexMessageChar;
      indexMessageChar = this.letters.indexOf(element);
      if (indexMessageChar < 0) {
        output.push(element);
      } else {
        let indexKeyChar = this.letters.indexOf(key_array[iteration]);
        let temp = (indexMessageChar - indexKeyChar) % this.letters.length;
        if (temp < 0) temp += this.letters.length;
        output.push(this.letters[temp]);
        iteration++;
      }
    });
    if (!this.typeOfMachine) return output.reverse().join('');
    return output.join('');
  }
}

module.exports = VigenereCipheringMachine;