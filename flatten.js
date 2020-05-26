// eqArray FUCTION
const eqArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// assertArraysEqual FUCTION
const assertArraysEqual = (a, b) => {
  let isEqual = eqArrays(a, b);
  console.log(a);
  console.log(b);

  isEqual
    ? console.log("✅️✅️✅️ Assertion passed: " + a + " === " + b)
    : console.log("💥️💥️💥️ Assertion failed: " + a + " !== " + b);
};

const flatten = (input) => {
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
