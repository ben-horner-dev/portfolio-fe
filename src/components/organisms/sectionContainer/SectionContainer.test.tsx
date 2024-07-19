import { renderWithProviders } from "@/utils/testUtils";
import { SectionContainer } from "./SectionContainer";

jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: { user: { email: "test@example.com" } } }),
}));

describe("SectionContainer", () => {
  it("renders without crashing and displays correct text", () => {
    const { getAllByTestId } = renderWithProviders(<SectionContainer />);

    const textElement = getAllByTestId("faded-text");
    expect(textElement).toHaveLength(1);
    const foreGroundText = getAllByTestId("un-faded-text");
    expect(foreGroundText).toHaveLength(1);
  });
});
