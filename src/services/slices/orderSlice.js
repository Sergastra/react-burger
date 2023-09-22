import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from "../thunks/createOrder";

const initialState = {
  orderNumber: 0,
  loading: false,
  error: true,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orderNumber = action.payload;
      state.error = false
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderNumber = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Bad fetch data';
      });
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
