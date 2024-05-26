import { render, screen } from "@testing-library/react";
import { CustomAppBar } from "./AppBar";

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
