import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllOrder = createAsyncThunk("orderHistory/fetchAllOrder", async () => {
  const res = await axios.get("http://localhost:5000/medicinesOrderByAdmin");
  return res.data;
});

const orderSlice = createSlice({
  name: "orderHistory",
  initialState: {
    isLoading: false,
    error: null,
    allOrders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allOrders = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.allOrders = [];
      state.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;
