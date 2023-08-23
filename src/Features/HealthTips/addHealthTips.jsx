import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addHealthTipsApi = createAsyncThunk("addHealthTips/addHealthTipsApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/addHealthTips`, data.data);

  if (res.data.insertedId) {
    Swal.fire({
      title: "success",
      text: "Lab added Successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });
    data.reset();
  }

  return res.data;
});

const addHealthTipsSlice = createSlice({
  name: "addHealthTips",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addHealthTipsApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addHealthTipsApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addHealthTipsApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addHealthTipsSlice.reducer;
