//const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (str) {
  const sentence = str.toLowerCase();
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let x = sentence[i];
      if (!(sentence[i] in results)) {
        results[x] = [];
        results[x].push(i);
      } else results[x].push(i);
    }
  }
  console.log("results:\n", results);
  return results;
};

module.exports = letterPositions;
