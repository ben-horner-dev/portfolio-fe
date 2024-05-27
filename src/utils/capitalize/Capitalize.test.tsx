import { capitalize } from "./Capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("should return the same string if it starts with a non-alphabetical character", () => {
    expect(capitalize("1hello")).toBe("1hello");
    expect(capitalize("@world")).toBe("@world");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should not change the case of the letters after the first one", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
    expect(capitalize("wORLD")).toBe("WORLD");
  });
});
