import { renderWithProviders } from "@/utils/testUtils";
import { SnapSections } from "./SnapSections";

describe("SnapSections", () => {
  it("renders without crashing and displays correct sections", () => {
    const { getAllByTestId } = renderWithProviders(<SnapSections />);

    const topSectionElement = getAllByTestId("oauth")[0];
    expect(topSectionElement).toBeInTheDocument();
    expect(topSectionElement).toHaveClass("inner-snap-section-top");
  });
});
