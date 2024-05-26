import { render, screen } from "@testing-library/react";
import { Burger } from "./Burger";

describe("Burger", () => {
  it("renders the burger icon", () => {
    render(<Burger />);
    const burgerIcon = screen.getByRole("button");
    expect(burgerIcon).toBeInTheDocument();
  });
});
