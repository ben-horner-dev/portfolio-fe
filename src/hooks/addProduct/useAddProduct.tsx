import { FlashType } from "@/enums/flashEnums";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFlash } from "@/hooks/flashHooks";
import { setShoppingCartItems } from "@/slices/shoppingCartSlice";

export const useAddProduct = () => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart.items);
  const dispatch = useAppDispatch();
  const flash = useFlash();

  const handleProductClick = (item: {
    product: string;
    price: number;
    qty?: number;
    key: number;
  }) => {
    return () => {
      let newQty = 1;
      if (shoppingCart && shoppingCart[item.key as keyof typeof shoppingCart]) {
        if (shoppingCart[item.key as keyof typeof shoppingCart]?.qty === 9) {
          flash(
            "Sorry but there are only 9 of these items left in stock",
            FlashType.WARNING,
          );
          return;
        } else {
          newQty = shoppingCart[item.key as keyof typeof shoppingCart].qty + 1;
        }
      }
      const shoppingCartCopy = {
        ...shoppingCart,
        [item.key]: {
          product: item.product,
          price: item.price,
          qty: newQty,
        },
      };
      dispatch(setShoppingCartItems(shoppingCartCopy));
    };
  };

  return handleProductClick;
};
