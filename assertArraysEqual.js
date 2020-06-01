const eqArrays = require("./eqArrays");

// assertArraysEqual FUCTION
const assertArraysEqual = (a, b) => {
  let isEqual = eqArrays(a, b);

  isEqual
    ? console.log(`✅️✅️✅️ Assertion passed: ${a} === ${b}`)
    : console.log(`💥️💥️💥️ Assertion failed: ${a} !== ${b}`);
};

module.exports = assertArraysEqual;
