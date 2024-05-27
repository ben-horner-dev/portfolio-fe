import { render } from "@testing-library/react";
import { OAuthAvatar } from "./OAuthAvatar";

describe("OAuthAvatar", () => {
  it("renders without crashing and displays correct icon", () => {
    const { getByAltText } = render(<OAuthAvatar icon="test-icon" />);

    const imageElement = getByAltText("test-icon");
    expect(imageElement).toHaveAttribute("src", "test-icon.svg");
    expect(imageElement).toHaveAttribute("width", "50");
    expect(imageElement).toHaveAttribute("height", "50");
  });
});
