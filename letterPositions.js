const letterPositions = function (str) {
  const sentence = str.toLowerCase();
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ");
    else {
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

assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house");
