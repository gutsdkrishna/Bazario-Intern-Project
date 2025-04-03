import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
  darkMode: false,
};

const bazarioSlice = createSlice({
  name: 'bazario',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += 1;
      state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        state.quantity -= existingItem.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload);
        state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        const quantityDiff = quantity - item.quantity;
        item.quantity = quantity;
        state.quantity += quantityDiff;
        state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.quantity = 0;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.quantity = 0;
    },
    deleteItem: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        state.quantity -= existingItem.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload);
        state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.quantity += 1;
        state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.quantity -= 1;
        state.total = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  toggleDarkMode,
  resetCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity
} = bazarioSlice.actions;

export default bazarioSlice.reducer; 