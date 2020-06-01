const assertArraysEqual = require("./assertArraysEqual");

const flatten = input => {
  let newArray = [];
  let i = 0;
  while (i < input.length) {
    // if (typeof input[i] === "object") newArray = newArray.concat(input[i]);
    if (Array.isArray(input[i])) newArray = newArray.concat(input[i]);
    else newArray.push(input[i]);
    i++;
  }
  //console.log(newArray);
  return newArray;
};

const originalArray = [1, 2, [3, 4], 5, [6]];
const newArray = flatten(originalArray);
assertArraysEqual(originalArray, newArray);
assertArraysEqual(newArray, [1, 2, 3, 4, 5, 6]);
