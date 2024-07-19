export type ShoppingCart = {
  [key: string]: {
    product: string;
    price: number;
    qty: number;
  };
};

export interface ImageListItemImageInfoProps {
  keyVal: number;
  checked: boolean;
  handleProductHover: (key: number, bool: boolean) => () => void;
}
