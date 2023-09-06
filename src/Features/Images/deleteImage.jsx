import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteImageApi = createAsyncThunk("deleteImage/deleteImageApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/images/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "Image has been deleted.", "success");
  }

  return res.data;
});

const deleteImageSlice = createSlice({
  name: "deleteImage",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteImageApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteImageApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteImageApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteImageSlice.reducer;
