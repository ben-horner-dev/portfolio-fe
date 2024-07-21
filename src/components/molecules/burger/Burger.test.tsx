import { renderWithProviders } from "@/utils/testUtils";
import { screen } from "@testing-library/react";
import { Burger } from "./Burger";

describe("Burger", () => {
  it("renders the burger icon", () => {
    renderWithProviders(<Burger />);
    const burgerIcon = screen.getByRole("button");
    expect(burgerIcon).toBeInTheDocument();
  });
});
