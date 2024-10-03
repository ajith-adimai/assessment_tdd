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
  // Handle Any Amount of Numbers
  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
  });
  // Handle New Lines Between Numbers
  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  // Support Different Delimiters
  it("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  // Handle Negative Numbers
  it("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  it("should show all negative numbers in the exception message", () => {
      expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });
});