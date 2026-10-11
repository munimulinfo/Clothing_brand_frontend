import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  quantity: number;
  size?: string;
  color?: string;
}

const initialState = [] as CartItem[];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<{
        productId: string;
        size: string;
      }>,
    ) => {
      return state.filter(
        (item) =>
          !(
            item.productId === action.payload.productId &&
            item.size === action.payload.size
          ),
      );
    },

    updateCartItem: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        size: string;
      }>,
    ) => {
      const item = state.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } =
  cartItemsSlice.actions;
export default cartItemsSlice.reducer;
