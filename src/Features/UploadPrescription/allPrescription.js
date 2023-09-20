import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPrescription = createAsyncThunk("allPrescription/fetchAllPrescription", async ({ email, role }) => {
  const res = await axios.get(`http://localhost:5000/prescriptions?email=${email}&role=${role}`);
  //   console.log(res.data);
  return res.data;
});

const allPrescriptionSlice = createSlice({
  name: "allPrescription",
  initialState: {
    isLoading: false,
    error: null,
    allPrescription: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPrescription.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllPrescription.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allPrescription = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllPrescription.rejected, (state, action) => {
      state.isLoading = false;
      state.allPrescription = [];
      state.error = action.error.message;
    });
  },
});

export default allPrescriptionSlice.reducer;
