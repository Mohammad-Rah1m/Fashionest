import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer, // Add other reducers here if needed
      cart:cartReducer,
    },
  });
};
