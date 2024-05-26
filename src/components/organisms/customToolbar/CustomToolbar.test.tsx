import { render, screen } from "@testing-library/react";
import { CustomToolbar } from "./CustomToolbar";

describe("CustomToolbar", () => {
  it("renders the custom toolbar with burger and logo button", () => {
    render(<CustomToolbar />);
    const burgerButton = screen.getByTestId("burger-button");
    const logoButton = screen.getAllByAltText("Ben Horner")[0];
    expect(burgerButton).toBeInTheDocument();
    expect(logoButton).toBeInTheDocument();
  });
});
