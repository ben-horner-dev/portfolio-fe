import { ShoppingCart } from "@/types/EcommerceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartState {
  items: ShoppingCart | null;
  showCart: boolean;
  showPayment: boolean;
}

const initialState: ShoppingCartState = {
  items: null,
  showCart: false,
  showPayment: false,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setShoppingCartItems: (state, action: PayloadAction<ShoppingCart>) => {
      state.items = action.payload;
    },
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
    setShowPayment: (state, action: PayloadAction<boolean>) => {
      state.showPayment = action.payload;
    },
  },
});

export const { setShoppingCartItems, setShowCart, setShowPayment } =
  shoppingCartSlice.actions;

export const shoppingCartReducer = shoppingCartSlice.reducer;
