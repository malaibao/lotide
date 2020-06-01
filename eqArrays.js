//eqArray FUNCTION with nested array check
const eqArrays = (a, b) => {
  // Check arrays length
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      return eqArrays(a[i], b[i]);
    } else if (a[i].length !== b[i].length) {
      return false;
    }
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
