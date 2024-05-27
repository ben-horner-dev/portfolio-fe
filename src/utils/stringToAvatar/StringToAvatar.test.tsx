import { stringToAvatar } from "@/utils/stringToAvatar";
import { stringToColor } from "@/utils/stringToColor";

describe("stringAvatar", () => {
  it("returns an object", () => {
    const result = stringToAvatar("John Doe");
    expect(typeof result).toBe("object");
  });

  it("returns an object with a sx property", () => {
    const result = stringToAvatar("John Doe");
    expect(result).toHaveProperty("sx");
  });

  it("returns an object with a children property", () => {
    const result = stringToAvatar("John Doe");
    expect(result).toHaveProperty("children");
  });

  it("returns an object where sx.bgcolor is the result of stringToColor", () => {
    const name = "John Doe";
    const result = stringToAvatar(name);
    expect(result.sx.bgcolor).toBe(stringToColor(name));
  });

  it("returns an object where children is the initials of the name", () => {
    const result = stringToAvatar("John Doe");
    expect(result.children).toBe("JD");
  });

  it("returns an object where children is the first character if name has only one word", () => {
    const result = stringToAvatar("John");
    expect(result.children).toBe("J");
  });
});
