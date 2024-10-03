const add = require('../src/stringCalculator');

// Test cases
describe("String Calculator", () => {
  // Test for an Empty String
  it("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
  });
});