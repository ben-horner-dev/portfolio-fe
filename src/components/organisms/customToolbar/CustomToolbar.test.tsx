import { renderWithProviders } from "@/utils/testUtils";
import { screen } from "@testing-library/react";
import { CustomToolbar } from "./CustomToolbar";
// Mock the scrollIntoView method
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { email: "test@example.com", name: "test" } },
  }),
}));

describe("CustomToolbar", () => {
  it("renders the custom toolbar with burger and logo button", () => {
    renderWithProviders(<CustomToolbar />);
    const burgerButton = screen.getByTestId("burger-button");
    const logoButton = screen.getAllByAltText("Ben Horner")[0];
    expect(burgerButton).toBeInTheDocument();
    expect(logoButton).toBeInTheDocument();
  });
});
