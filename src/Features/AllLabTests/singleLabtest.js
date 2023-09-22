import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleLabtest = createAsyncThunk("singleLabtest/fetchSingleLabtest", async (id) => {
  const res = await axios.get(`http://localhost:5000/labAllItems/${id}`);
  return res.data;
});

const singleLabtestSlice = createSlice({
  name: "singleLabtest",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleLabtest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleLabtest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSingleLabtest.rejected, (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default singleLabtestSlice.reducer;
