import { renderWithProviders } from "@/utils/testUtils";
import { SectionContainer } from "./SectionContainer";

describe("SectionContainer", () => {
  it("renders without crashing and displays correct text", () => {
    const { getAllByText } = renderWithProviders(<SectionContainer />);

    const textElement = getAllByText("OAUTH FLOW");
    expect(textElement).toHaveLength(2);
    for (const element of textElement) {
      expect(element).toBeInTheDocument();
    }
  });
});
