import { renderWithProviders } from "@/utils/testUtils";
import { calculateTotal, CheckoutTableFooter } from "./CheckoutTableFooter";

describe("Calculate Total not null", () => {
  it("Calculates the total of a not null shoppingcart", () => {
    const res = calculateTotal({
      "1": {
        qty: 1,
        price: 1,
        product: "product1",
      },
      "2": {
        qty: 2,
        price: 2,
        product: "product2",
      },
    });

    expect(res).toBe(5);
  });

  it("Calculates the total null shoppingcart", () => {
    const res = calculateTotal(null);

    expect(res).toBe(0);
  });
});

describe("CheckoutTableFooter", () => {
  it("renders the checkout table footer with total", () => {
    const { getByText } = renderWithProviders(<CheckoutTableFooter />);
    const total = getByText("Total");
    expect(total).toBeInTheDocument();
    const totalValue = getByText("$0");
    expect(totalValue).toBeInTheDocument();
  });
});
