import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addImageApi = createAsyncThunk("addImage/addImageApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, data);

  if (res.data.insertedId) {
    Swal.fire({
      title: "success",
      text: "Image Uploaded Successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });
    data.form.reset();
  }

  return res.data;
});

const addImageSlice = createSlice({
  name: "addImage",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addImageApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addImageApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addImageApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addImageSlice.reducer;
