import {
  addition,
  subtraction,
  multiplication,
  division,
} from "../src/calculator";

describe("Mathematical functions", () => {
  describe("addition", () => {
    it("should return 0 when no arguments are passed", () => {
      expect(addition()).toBe(0);
    });

    it("should return the correct sum of positive numbers", () => {
      expect(addition(1, 2, 3)).toBe(6);
    });

    it("should handle negative numbers", () => {
      expect(addition(-1, -2, -3)).toBe(-6);
    });

    it("should handle a mix of positive and negative numbers", () => {
      expect(addition(1, -2, 3)).toBe(2);
    });

    it("should return 0 for an empty array", () => {
      expect(addition(...[])).toBe(0);
    });
  });

  describe("subtraction", () => {
    it("should return 0 when no arguments are passed", () => {
      expect(subtraction()).toBe(0);
    });

    it("should return the correct subtraction of numbers", () => {
      expect(subtraction(10, 3, 2)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(subtraction(-10, -5)).toBe(-5);
    });

    it("should handle a mix of positive and negative numbers", () => {
      expect(subtraction(10, -5, 2)).toBe(13);
    });
  });

  describe("multiplication", () => {
    it("should return 0 when no arguments are passed", () => {
      expect(multiplication()).toBe(0);
    });

    it("should return the correct multiplication of positive numbers", () => {
      expect(multiplication(2, 3, 4)).toBe(24);
    });

    it("should return 0 when any argument is 0", () => {
      expect(multiplication(2, 3, 0)).toBe(0);
    });

    it("should handle negative numbers", () => {
      expect(multiplication(-2, 3)).toBe(-6);
    });

    it("should handle a mix of positive and negative numbers", () => {
      expect(multiplication(-2, 3, -4)).toBe(24);
    });
  });

  describe("division", () => {
    it("should return 0 when no arguments are passed", () => {
      expect(division()).toBe(0);
    });

    it("should return the correct division of numbers", () => {
      expect(division(20, 2, 5)).toBe(2);
    });

    it("should handle negative numbers", () => {
      expect(division(-20, 2)).toBe(-10);
    });

    it("should handle a mix of positive and negative numbers", () => {
      expect(division(-20, -2, 5)).toBe(2);
    });

    it("should throw an error when dividing by 0", () => {
      expect(() => division(10, 0)).toThrowError();
    });
  });
});
