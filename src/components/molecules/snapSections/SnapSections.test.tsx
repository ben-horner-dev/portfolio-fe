import { renderWithProviders } from "@/utils/testUtils";
import { SnapSections } from "./SnapSections";

describe("SnapSections", () => {
  it("renders without crashing and displays correct sections", () => {
    const sections = [
      {
        name: "oauth",
        ref: { current: null },
        className: "inner-snap-section",
      },
    ];
    const { getAllByTestId } = renderWithProviders(
      <SnapSections sections={sections} />,
    );

    const topSectionElement = getAllByTestId("oauth")[0];
    expect(topSectionElement).toBeInTheDocument();
    expect(topSectionElement).toHaveClass("inner-snap-section");
  });
});
