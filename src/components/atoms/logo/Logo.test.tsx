import { useRefs } from "@/contexts/refProvider";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

jest.mock("@/contexts/refProvider", () => ({
  useRefs: jest.fn(),
}));

describe("Logo", () => {
  it("renders the contrast logo", () => {
    (useRefs as jest.Mock).mockReturnValue({
      hero: { isVisible: true },
    });
    render(<Logo />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "Ben Horner");
    expect(logo).toHaveAttribute("width", "110");
    expect(logo).toHaveAttribute("height", "0");
  });
});

describe("Logo", () => {
  it("renders the contrast logo", () => {
    (useRefs as jest.Mock).mockReturnValue({
      hero: { isVisible: false },
    });
    render(<Logo />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo_contrast.svg");
    expect(logo).toHaveAttribute("alt", "Ben Horner");
    expect(logo).toHaveAttribute("width", "110");
    expect(logo).toHaveAttribute("height", "0");
  });
});
