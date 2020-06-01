const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("return drama for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });
  it("return sci_fi for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    assert.strictEqual(result, "sci_fi");
  });
  it("return undefined for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The 70s Show");
    assert.strictEqual(result, undefined);
  });
});
