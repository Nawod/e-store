/**
 * @class cartSlice
 * @description purpose of this slice is to manage cart states
 * @author Nawod Madhuwantha
*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

const initialState: CartItem[] = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add item to the cart
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    //remove an item from the cart
    removeFromCart(state, action: PayloadAction<number>) {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    //update cart item's quantity
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice;
