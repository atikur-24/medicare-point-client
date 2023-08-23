import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllHealthTips = createAsyncThunk("allHealthTips/fetchAllHealthTips", async () => {
  const res = await axios.get("http://localhost:5000/allHealthTips");
  return res.data;
});

const allHealthTipsSlice = createSlice({
  name: "allHealthTips",
  initialState: {
    isLoading: false,
    error: null,
    allHealthTips: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllHealthTips.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllHealthTips.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allHealthTips = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllHealthTips.rejected, (state, action) => {
      state.isLoading = false;
      state.allHealthTips = [];
      state.error = action.error.message;
    });
  },
});

export default allHealthTipsSlice.reducer;
