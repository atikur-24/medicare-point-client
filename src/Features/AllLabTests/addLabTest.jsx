import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addLabTestApi = createAsyncThunk("addLabTest/addLabTestApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/labItems`, data.data);

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

const addLabTestSlice = createSlice({
  name: "addLabTest",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addLabTestApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addLabTestApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addLabTestApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addLabTestSlice.reducer;
