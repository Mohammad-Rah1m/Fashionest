import { createSlice } from '@reduxjs/toolkit';
// const loadStateFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('cartItems');
//     return serializedState ? JSON.parse(serializedState) : [];
//   } catch (error) {
//     console.error("Could not load cart items from localStorage", error);
//     return [];
//   }
// };
// const initialState = {
//   // items: loadStateFromLocalStorage(), MOVED LOCAL STORAGE TO CLIENT SIDE > HEADER COMPONENT
//   items:[],
// };

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Could not load cart items from localStorage", error);
    return [];
  }
};

const initialState = {
  items: loadStateFromLocalStorage(),
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
      // localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item) {
        item.quantity += 1; // Increment the item quantity
      }
      // localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => { 
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item) {
        item.quantity -= 1; // Increment the item quantity
      }
      // localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      // localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    setItems: (state, action) => {
      state.items = action.payload; // Used to set initial items from localStorage
      console.log("setItems Called")
    },
  },
});

export const { addItemToCart,incrementQuantity,decrementQuantity, removeItemFromCart, setItems } = cartSlice.actions;
export default cartSlice.reducer;
