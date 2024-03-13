import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../app/features/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
