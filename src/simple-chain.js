const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (value == null) value = 'null';
    this.str.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof (position) !== 'number') {
      this.str = [];
      throw Error;
    }
    this.str.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let res = this.str.join('~~');
    this.str = [];
    return res;
  }
};

module.exports = chainMaker;