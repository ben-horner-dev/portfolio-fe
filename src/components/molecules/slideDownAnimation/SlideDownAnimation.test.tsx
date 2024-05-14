import { render, screen } from "@testing-library/react";
import { SlideDownAnimation } from "./SlideDownAnimation";

describe("SlideDownAnimation", () => {
  it("renders the children and applies the correct classes", () => {
    render(<SlideDownAnimation>Test text</SlideDownAnimation>);

    const textElement = screen.getByText("Test text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("animate__animated");
    expect(textElement).toHaveClass("animate__slideInDown");
  });
});
