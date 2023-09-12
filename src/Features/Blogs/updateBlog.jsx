import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const updateBlogApi = createAsyncThunk("updateBlog/updateBlogApi", async (data) => {
  const res = await axios.put(`http://localhost:5000/blogs/${data._id}`, data.data);

  if (res.data.modifiedCount > 0) {
    Swal.fire("Updated Successfully", "success");
  }

  return res.data;
});

const updateBlogSlice = createSlice({
  name: "updateBlog",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(updateBlogApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBlogApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(updateBlogApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default updateBlogSlice.reducer;
