import { setupStore } from "@/lib";
import { renderWithProviders } from "@/utils/testUtils";
import { calculateTotalItems, ShoppingCart } from "./ShoppingCart";

describe("calculateTotalItems", () => {
  it("returns 0 for null input", () => {
    expect(calculateTotalItems(null)).toBe(0);
  });

  it("returns 0 for an empty object", () => {
    expect(calculateTotalItems({})).toBe(0);
  });

  it("returns the total quantity of items", () => {
    const shoppingCartItems = {
      item1: { qty: 1 },
      item2: { qty: 2 },
      item3: { qty: 3 },
    };
    expect(calculateTotalItems(shoppingCartItems)).toBe(6);
  });
  it("show cart", () => {
    const shoppingCartItems = {
      item1: { qty: 1, product: "product1", price: 10 },
    };
    const store = setupStore({
      shoppingCart: {
        items: shoppingCartItems,
        showCart: false,
        showPayment: false,
      },
    });
    const { getByTestId } = renderWithProviders(<ShoppingCart />, {
      store,
    });
    getByTestId("shopping-cart-btn").click();
    expect(store.getState().shoppingCart.showCart).toBe(true);
  });
  it("show cart", () => {
    const store = setupStore({
      shoppingCart: {
        items: null,
        showCart: false,
        showPayment: false,
      },
    });
    const { getByTestId } = renderWithProviders(<ShoppingCart />, {
      store,
    });
    getByTestId("shopping-cart-btn").click();
    expect(store.getState().shoppingCart.showCart).toBe(false);
  });
});
