import { render, screen } from "@testing-library/react";
import { LogoBtn } from "./LogoBtn";

describe("LogoBtn", () => {
  it("renders the logo button", () => {
    render(<LogoBtn />);
    const logoButton = screen.getByRole("button");
    expect(logoButton).toBeInTheDocument();
  });
});
