const findKeyByValue = (inputObj, target) => {
  let foundKey;
  for (let key of Object.keys(inputObj)) {
    if (inputObj[key] === target) foundKey = key;
  }
  return foundKey;
};

module.exports = findKeyByValue;
