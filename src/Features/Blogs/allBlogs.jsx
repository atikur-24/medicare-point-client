import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBlogs = createAsyncThunk("allBlogs/fetchAllBlogs", async () => {
  const res = await axios.get("http://localhost:5000/blogs");
  return res.data;
});

const fetchAllBlogsSlice = createSlice({
  name: "allBlogs",
  initialState: {
    isLoading: false,
    error: null,
    allBlogs: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allBlogs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.allBlogs = [];
      state.error = action.error.message;
    });
  },
});

export default fetchAllBlogsSlice.reducer;
