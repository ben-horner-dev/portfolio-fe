import { render } from "@testing-library/react";
import { UnFadedText } from "./UnFadedText";

describe("UnFadedText", () => {
  it("renders without crashing and displays correct text and children", () => {
    const { getByText } = render(
      <UnFadedText text="Test Text" textClass="test-class">
        <div>Test Child</div>
      </UnFadedText>,
    );

    const textElement = getByText("Test Text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("test-class");
    expect(textElement).toHaveClass("unfaded-text");

    const childElement = getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });
});
