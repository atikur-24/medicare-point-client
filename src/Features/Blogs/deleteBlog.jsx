import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteBlogApi = createAsyncThunk("deleteBlog/deleteBlogApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/blogs/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "lab has been deleted.", "success");
  }

  return res.data;
});

const deleteBlogSlice = createSlice({
  name: "deleteBlog",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBlogApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBlogApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteBlogApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteBlogSlice.reducer;
