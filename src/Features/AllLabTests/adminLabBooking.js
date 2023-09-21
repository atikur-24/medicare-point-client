import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminLabBooking = createAsyncThunk("adminLabBooking/fetchAdminLabBooking", async () => {
  const res = await axios.get("http://localhost:5000/adminLabBooking");
  return res.data;
});

const adminLabBooking = createSlice({
  name: "adminLabBooking",
  initialState: {
    isLoading: false,
    error: null,
    allLabBooking: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminLabBooking.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdminLabBooking.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allLabBooking = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAdminLabBooking.rejected, (state, action) => {
      state.isLoading = false;
      state.allLabBooking = [];
      state.error = action.error.message;
    });
  },
});

export default adminLabBooking.reducer;
