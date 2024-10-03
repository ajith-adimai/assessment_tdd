const add = require('../src/stringCalculator');

// Test cases
describe("String Calculator", () => {
  // Test for an Empty String
  it("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
  });
  // Test for One and Two Numbers 
  it("should return the number itself if the input contains one number", () => {
      expect(add("1")).toBe(1);
  });
  
  it("should return the sum of two numbers separated by a comma", () => {
      expect(add("1,2")).toBe(3);
  });
});