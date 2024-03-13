import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        state.events = [];
      });
  },
});

export default productSlice.reducer;
