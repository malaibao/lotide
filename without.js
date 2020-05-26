// eqArray FUCTION
const eqArrays = (a, b) => {
  let isEqual = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      isEqual = false;
      break;
    }
  }
  isEqual
    ? console.log(`✅️✅️✅️ Assertion passed: ${a} === ${b}`)
    : console.log(`💥️💥️💥️ Assertion failed: ${a} !== ${b}`);
};

// eqArray FUCTION
const eqArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// without FUNCTION
