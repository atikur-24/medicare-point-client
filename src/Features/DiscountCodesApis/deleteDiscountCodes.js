import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteDiscountCodesApi = createAsyncThunk("deleteDiscountCodes/deleteDiscountCodesApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/discountCodes/${id}`);
  return res.data;
});

const deleteDiscountCodesSlice = createSlice({
  name: "deleteDiscountCodes",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteDiscountCodesApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteDiscountCodesApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteDiscountCodesApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteDiscountCodesSlice.reducer;
