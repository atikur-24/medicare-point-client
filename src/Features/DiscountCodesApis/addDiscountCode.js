import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addDiscountCodeApi = createAsyncThunk("addDiscountCode/addDiscountCodeApi", async (data) => {
  const res = await axios.post(`http://localhost:5000/discountCodes`, data);
  return res.data;
});

const addDiscountCodeSlice = createSlice({
  name: "addDiscountCode",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addDiscountCodeApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addDiscountCodeApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addDiscountCodeApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addDiscountCodeSlice.reducer;
