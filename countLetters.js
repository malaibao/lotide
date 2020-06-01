// const assertObjectsEqual = require("./assertObjectsEqual");

const countLetters = input => {
  let str = input.split(" ").join("").toLowerCase();
  let countObj = {};
  for (let char of str) {
    // if not exists
    if (!(char in countObj)) {
      countObj[char] = 1;
    } else {
      countObj[char]++;
    }
  }
  // console.log(countObj);
  return countObj;
};

module.exports = countLetters;
