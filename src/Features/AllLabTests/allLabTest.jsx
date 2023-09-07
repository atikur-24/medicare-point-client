import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllLabTests = createAsyncThunk("allLabTests/fetchAllLabTests", async (searchData) => {
  const res = await axios.get(`http://localhost:5000/labAllItems?name=${searchData}`);
  return res.data;
});

const allLabTestSlice = createSlice({
  name: "allLabTests",
  initialState: {
    isLoading: false,
    error: null,
    allLabTest: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllLabTests.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllLabTests.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allLabTest = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllLabTests.rejected, (state, action) => {
      state.isLoading = false;
      state.allLabTest = [];
      state.error = action.error.message;
    });
  },
});

export default allLabTestSlice.reducer;
