import { setupStore } from "@/lib";
import { renderWithProviders } from "@/utils/testUtils";
import { CheckoutTableRow } from "./CheckoutTableRow";

describe("CheckoutTableRow", () => {
  it("Add product", () => {
    const store = setupStore({
      shoppingCart: {
        items: {
          0: {
            product: "Product 1",
            price: 100,
            qty: 1,
          },
        },
        showCart: true,
        showPayment: false,
      },
    });
    const { getByTestId } = renderWithProviders(
      <CheckoutTableRow
        keyVal="0"
        item={{
          product: "Product 1",
          price: 100,
          qty: 1,
        }}
      />,
      { store },
    );
    const addBtn = getByTestId("add-btn");
    // const rmBtn = getByTestId("rm-btn");
    addBtn.click();
    expect(store.getState().shoppingCart.items[0].qty).toBe(2);

    // rmBtn.click();
    // expect(store.getState().shoppingCart.items[0].qty).toBe(1);
  });
  it("Rm product", () => {
    const store = setupStore({
      shoppingCart: {
        items: {
          0: {
            product: "Product 1",
            price: 100,
            qty: 1,
          },
        },
        showCart: true,
        showPayment: false,
      },
    });
    const { getByTestId } = renderWithProviders(
      <CheckoutTableRow
        keyVal="0"
        item={{
          product: "Product 1",
          price: 100,
          qty: 1,
        }}
      />,
      { store },
    );
    const rmBtn = getByTestId("rm-btn");

    rmBtn.click();
    expect(store.getState().shoppingCart.items[0].qty).toBe(0);
  });
  it("No products", () => {
    const store = setupStore({
      shoppingCart: {
        items: {
          0: {
            product: "Product 1",
            price: 100,
            qty: 0,
          },
        },
        showCart: true,
        showPayment: false,
      },
    });
    const { getByTestId } = renderWithProviders(
      <CheckoutTableRow
        keyVal="0"
        item={{
          product: "Product 1",
          price: 100,
          qty: 0,
        }}
      />,
      { store },
    );
    const rmBtn = getByTestId("rm-btn");

    rmBtn.click();
    expect(JSON.stringify(store.getState().shoppingCart.items)).toBe(
      JSON.stringify({}),
    );
  });
});
