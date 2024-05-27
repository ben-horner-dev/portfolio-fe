import { render } from "@testing-library/react";
import { SnapSectionContent } from "./SnapSectionContent";

describe("SnapSectionContent", () => {
  it("renders without crashing and displays correct content", () => {
    const { getByText } = render(
      <SnapSectionContent
        content={<div>Test Content</div>}
        contentClass="test-class"
      />,
    );

    const contentElement = getByText("Test Content");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.parentElement).toHaveClass("test-class");
    expect(contentElement.parentElement).toHaveClass("content-container");
  });
});
