import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deletePrescriptionApi = createAsyncThunk("deletePrescription/deletePrescriptionApi", async (id) => {
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}/prescriptions/${id}`);
  return res.data;
});

const deletePrescriptionSlice = createSlice({
  name: "deletePrescription",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deletePrescriptionApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePrescriptionApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deletePrescriptionApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deletePrescriptionSlice.reducer;
