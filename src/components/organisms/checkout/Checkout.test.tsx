import { setupStore } from "@/lib";
import { renderWithProviders } from "@/utils/testUtils";
import { screen } from "@testing-library/react";
import { Checkout } from "./Checkout";

// Mocks

describe("Checkout Component Tests", () => {
  test("renders without crashing no items", () => {
    const store = setupStore({
      shoppingCart: {
        showCart: false,
        items: {},
        showPayment: false,
      },
    });
    renderWithProviders(<Checkout />, { store });
    expect(
      screen.getByText(/You have no items in your cart/i),
    ).toBeInTheDocument();
  });

  test("renders without crashing with items", () => {
    const store = setupStore({
      shoppingCart: {
        showCart: false,
        items: {
          "1": {
            name: "Test",
            price: 10,
            qty: 1,
          },
        },
        showPayment: false,
      },
    });
    renderWithProviders(<Checkout />, { store });
    expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
  });
});
