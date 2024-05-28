import { render, screen } from "@testing-library/react";
import { Landing } from "./Landing";

describe("Hero", () => {
  it("renders the hero section with correct texts and classes", () => {
    render(<Landing />);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("snap-section");

    const subHeader = screen.getByTestId("subheader");
    expect(subHeader).toBeInTheDocument();

    const siblings = Array.from(subHeader.parentNode?.children || []).filter(
      (child) => child !== subHeader,
    );
    expect(siblings).toHaveLength(3);
    expect(siblings[0]).toHaveClass("full-screen-text");
    expect(siblings[1]).toHaveClass("mobile-screen-text");
    const contactBtn = screen.getByRole("button");
    expect(contactBtn).toBeInTheDocument();
  });
});
