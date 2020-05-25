// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected)
    console.log(`💥️💥️💥️ Assertion failed: ${actual} !== ${expected}`);
  else console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
};

const tail = function (array) {
  console.log(array);
  if(array === [] || array.length === 1)
    return [];
  let x = [...array]; 
  x = x.splice(1, array.length - 1);
  console.log(x);
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


console.log('---');
tail([1,2,3,4,5,6]);
tail([1]);
tail([]);
