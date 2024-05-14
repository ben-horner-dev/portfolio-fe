import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders the text and applies the correct class", () => {
    render(<Text text="Test text" className="testClass" />);

    const textElement = screen.getByText("Test text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("testClass");
  });
});
