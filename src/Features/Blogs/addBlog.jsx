import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addBlogApi = createAsyncThunk("addBlog/addBlogApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/blogs`, data.data);

  if (res.data.insertedId) {
    Swal.fire({
      title: "success",
      text: "Lab added Successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });
    data.form.reset();
  }

  return res.data;
});

const addBlogSlice = createSlice({
  name: "addBlog",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addBlogApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBlogApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addBlogApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addBlogSlice.reducer;
