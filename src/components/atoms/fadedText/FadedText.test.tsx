import { fireEvent, render } from "@testing-library/react";
import { FadedText } from "./FadedText";

describe("FadedText", () => {
  it("renders without crashing and calls handleAnimationEnd on animation end", () => {
    const handleAnimationEnd = jest.fn();
    const { getByText } = render(
      <FadedText
        text="Test Text"
        textClass="test-class"
        handleAnimationEnd={handleAnimationEnd}
      />,
    );

    const textElement = getByText("Test Text");
    expect(textElement).toHaveClass("test-class");
    expect(textElement).toHaveClass("faded-text");

    fireEvent.animationEnd(textElement);
    expect(handleAnimationEnd).toHaveBeenCalled();
  });
});
