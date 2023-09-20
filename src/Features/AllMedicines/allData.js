import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllData = createAsyncThunk("allData/fetchAllData", async (api) => {
  const res = await axios.get(`http://localhost:5000/${api}`);
  return res.data;
});

const allDataSlices = createSlice({
  name: "allData",
  initialState: {
    isLoading: false,
    error: null,
    allData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.allData = [];
    });
    builder.addCase(fetchAllData.fulfilled, (state, { payload }) => {
      state.allData = payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchAllData.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
      state.allData = [];
    });
  },
});

export default allDataSlices.reducer;
