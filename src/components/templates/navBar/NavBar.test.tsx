import { renderWithProviders } from "@/utils/testUtils";
import { screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { email: "test@example.com", name: "test" } },
  }),
}));

describe("NavBar", () => {
  it("renders the custom nav bar with a custom toolbar", () => {
    renderWithProviders(<NavBar />);
    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveClass("appbar");
    const customToolbar = screen.getByTestId("custom-toolbar");
    expect(customToolbar).toBeInTheDocument();
  });
});
