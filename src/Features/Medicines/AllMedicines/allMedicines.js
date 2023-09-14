import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMedicines = createAsyncThunk("allData/fetchMedicines", async (data) => {
  const res = await axios.get(`http://localhost:5000/medicines?sort=${data?.sort}&category=${data?.category}`);
  return res.data;
});

const allMedicinesSlice = createSlice({
  name: "allData",
  initialState: {
    isloading: false,
    allData: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMedicines.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchMedicines.fulfilled, (state, action) => {
      state.isloading = false;
      state.allData = action.payload;
      state.error = null;
    });
    builder.addCase(fetchMedicines.rejected, (state, action) => {
      state.isloading = false;
      state.allData = [];
      state.error = action.error.message;
    });
  },
});

export default allMedicinesSlice.reducer;
