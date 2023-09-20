import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateDiscountCodeApi = createAsyncThunk("updateDiscountCode/updateDiscountCodeApi", async (data) => {
  const res = await axios.patch(`http://localhost:5000/discountCodes`, data);
  return res.data;
});

const updateDiscountCodeSlice = createSlice({
  name: "updateDiscountCode",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(updateDiscountCodeApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateDiscountCodeApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(updateDiscountCodeApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default updateDiscountCodeSlice.reducer;
