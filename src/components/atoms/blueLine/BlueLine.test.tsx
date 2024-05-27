import { render } from "@testing-library/react";
import { BlueLine } from "./BlueLine";

describe("BlueLine", () => {
  it("renders without crashing", () => {
    const { container } = render(<BlueLine />);
    expect(container.firstChild).toHaveClass("blue-line");
  });
});
