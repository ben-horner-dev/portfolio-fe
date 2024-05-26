import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders the logo", () => {
    render(<Logo />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "Ben Horner");
    expect(logo).toHaveAttribute("width", "110");
    expect(logo).toHaveAttribute("height", "0");
  });
});
