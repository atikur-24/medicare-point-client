import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllImages = createAsyncThunk("allImages/fetchAllImages", async (data) => {
  const res = await axios.get(`http://localhost:5000/images?email=${data?.email}&name=${data?.searchBy}`);
  //   console.log(res.data);
  return res.data;
});

const fetchAllImagesSlice = createSlice({
  name: "allImages",
  initialState: {
    isLoading: false,
    error: null,
    allImages: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allImages = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllImages.rejected, (state, action) => {
      state.isLoading = false;
      state.allImages = [];
      state.error = action.error.message;
    });
  },
});

export default fetchAllImagesSlice.reducer;
