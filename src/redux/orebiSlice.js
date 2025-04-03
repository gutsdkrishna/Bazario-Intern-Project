import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  darkMode: false,
  theme: {
    primary: "#fbb72c",
    secondary: "#1a1a1a",
    accent: "#ff6b6b",
    background: "#ffffff",
    text: "#000000",
  },
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        state.theme = {
          primary: "#fbb72c",
          secondary: "#1a1a1a",
          accent: "#ff6b6b",
          background: "#1a1a1a",
          text: "#ffffff",
        };
      } else {
        state.theme = {
          primary: "#fbb72c",
          secondary: "#1a1a1a",
          accent: "#ff6b6b",
          background: "#ffffff",
          text: "#000000",
        };
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleDarkMode,
} = orebiSlice.actions;
export default orebiSlice.reducer;
