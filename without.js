// eqArray FUCTION
const eqArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// assertArraysEqual FUCTION
const assertArraysEqual = (a, b) => {
  //   let isEqual = true;
  let isEqual = eqArrays(a, b);

  isEqual
    ? console.log(`✅️✅️✅️ Assertion passed: ${a} === ${b}`)
    : console.log(`💥️💥️💥️ Assertion failed: ${a} !== ${b}`);
};

// without FUNCTION
const without = (source, itemsToRemove) => {
  let wantedArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (wantedArray.indexOf(itemsToRemove[i]) !== -1)
      wantedArray.splice(wantedArray.indexOf(itemsToRemove[i]), 1);
  }
  console.log(wantedArray);
};

// Test Case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
