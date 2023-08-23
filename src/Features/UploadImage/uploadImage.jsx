import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImageApi = createAsyncThunk("uploadImage/uploadImageApi", async (formData) => {
  const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formData);
  // console.log(res.data);
  return res.data;
});

const uploadImageSlice = createSlice({
  name: "uploadImage",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImageApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadImageApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload.data;
      state.error = null;
    });
    builder.addCase(uploadImageApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default uploadImageSlice.reducer;
