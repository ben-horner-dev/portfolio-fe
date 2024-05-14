import { render, screen } from "@testing-library/react";
import CenteredTextBox from "./CenteredTextBox";

describe("CenteredTextBox", () => {
  it("renders the children and applies the correct class", () => {
    render(<CenteredTextBox>Test text</CenteredTextBox>);

    const textElement = screen.getByText("Test text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("centered-text");
  });
});
