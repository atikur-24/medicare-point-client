import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const isValidDiscountApi = createAsyncThunk("isValidDiscount/isValidDiscountApi", async (data) => {
  const res = await axios.post(`http://localhost:5000/isValidDiscount`, data);
  return res.data;
});

const isValidDiscountSlice = createSlice({
  name: "isValidDiscount",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(isValidDiscountApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(isValidDiscountApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(isValidDiscountApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default isValidDiscountSlice.reducer;
