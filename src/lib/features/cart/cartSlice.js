import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item to cart
      }
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item) {
        item.quantity += 1; // Increment the item quantity
      }
    },
    decrementQuantity: (state, action) => { 
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item) {
        item.quantity -= 1; // Increment the item quantity
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

export const { addItemToCart,incrementQuantity,decrementQuantity, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
