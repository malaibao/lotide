const assertEqual = require("./assertEqual");

const findKeyByValue = (inputObj, target) => {
  let foundKey;
  for (let key of Object.keys(inputObj)) {
    if (inputObj[key] === target) foundKey = key;
  }
  return foundKey;
};

// TEST CASE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
