const middle = input => {
  let middleElements = [...input];
  if (input.length <= 2) return [];

  let mid = Math.floor(input.length / 2);
  if (input.length % 2 === 0)
    middleElements = middleElements.splice(mid - 1, 2);
  else middleElements = middleElements.splice(mid, 1);

  return middleElements;
};

module.exports = middle;
