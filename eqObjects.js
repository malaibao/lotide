// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //   return assertEqual(object1, object2);

  // Check objects' key length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // for (let [key,value] of Object.entries(object1))

  for (let key of Object.keys(object1)) {
    // Check if value is an array
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    // Check primitive type value
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// assertEqual Func
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

// eqArray FUCTION
const eqArrays = (a, b) => {
  // Check if both are array
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }
  // Check array length
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

//TEST CASES

// Check same object
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

//Check different keys length
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

// Check different order with primitive
const xy = { a: "1", b: "1" };
const yx = { b: "2", a: "1" };
console.log(eqObjects(xy, yx)); // => false

// Check different keys
const x1 = { a: "1", b: "1" };
const x2 = { a: "1", c: "1" };
console.log(eqObjects(xy, yx)); // => false

// Check different key order with array
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

// Check different arrays
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// Check one primitive , one array, SAME OBJECTS
const a1 = { c: "1", d: ["2", 3, 4] };
const a2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(a1, a2)); // => true