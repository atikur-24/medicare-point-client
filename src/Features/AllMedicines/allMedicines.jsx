import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMedicines = createAsyncThunk("allUsers/fetchAllUsers", async () => {
  const res = await axios.get("http://localhost:5000/medicines");
  return res.data;
});

const allMedicinesSlice = createSlice({
  name: "allMedicines",
  initialState: {
    isLoading: false,
    error: null,
    allUsers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMedicines.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMedicines.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllMedicines.rejected, (state, action) => {
      state.isLoading = false;
      state.allUsers = [];
      state.error = action.error.message;
    });
  },
});

export default allMedicinesSlice.reducer;
