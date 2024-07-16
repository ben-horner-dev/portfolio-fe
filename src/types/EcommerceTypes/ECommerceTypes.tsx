export type ShoppingCart = {
  [key: string]: {
    product: string;
    price: number;
    qty: number;
  };
};
