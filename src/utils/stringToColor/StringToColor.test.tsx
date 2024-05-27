import { stringToColor } from "./StringToColor";

describe("stringToColor", () => {
  it("returns a string", () => {
    const result = stringToColor("test");
    expect(typeof result).toBe("string");
  });

  it("returns a string that starts with #", () => {
    const result = stringToColor("test");
    expect(result[0]).toBe("#");
  });

  it("returns a string of length 7", () => {
    const result = stringToColor("test");
    expect(result.length).toBe(7);
  });

  it("returns a valid hex color code", () => {
    const result = stringToColor("test");
    const match = result.match(/^#([0-9a-f]{6})$/i);
    expect(match).toBeTruthy();
  });

  it("returns the same color for the same string", () => {
    const result1 = stringToColor("test");
    const result2 = stringToColor("test");
    expect(result1).toBe(result2);
  });

  it("returns different colors for different strings", () => {
    const result1 = stringToColor("test1");
    const result2 = stringToColor("test2");
    expect(result1).not.toBe(result2);
  });
});
