import { renderWithProviders } from "@/utils/testUtils";
import { SnapSectionContainer } from "./SnapSectionContainer";

describe("SnapSectionContainer", () => {
  it("renders without crashing", () => {
    const { container } = renderWithProviders(
      <SnapSectionContainer>Test</SnapSectionContainer>,
    );

    expect(container.firstChild).toHaveClass("snap-section-container");
  });
});
