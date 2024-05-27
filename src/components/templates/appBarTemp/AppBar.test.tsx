import { render, screen } from "@testing-library/react";
import { CustomAppBar } from "./AppBar";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { email: "test@example.com", name: "test" } },
  }),
}));

describe("CustomAppBar", () => {
  it("renders the custom app bar with a custom toolbar", () => {
    render(<CustomAppBar />);
    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveClass("appbar");
    const customToolbar = screen.getByTestId("custom-toolbar");
    expect(customToolbar).toBeInTheDocument();
  });
});
