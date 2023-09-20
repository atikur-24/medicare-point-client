import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetailData = createAsyncThunk("data/fetchDetailData", async (api) => {
  const res = await axios.get(`http://localhost:5000/${api}`);
  return res.data;
});

const detailDataSlices = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    error: null,
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetailData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetailData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(fetchDetailData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default detailDataSlices.reducer;
