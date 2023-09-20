import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addPrescriptionCardApi = createAsyncThunk("addPrescriptionCard/addPrescriptionCardApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/prescriptions`, data);
  return res.data;
});

const addPrescriptionCardSlice = createSlice({
  name: "addPrescriptionCard",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addPrescriptionCardApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addPrescriptionCardApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addPrescriptionCardApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addPrescriptionCardSlice.reducer;
