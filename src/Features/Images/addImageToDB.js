import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addImageToDBApi = createAsyncThunk("addImageToDB/addImageToDBApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/images?collectionName=${data.collectionName}`, data.imageData);
  return res.data;
});

const addImageToDBSlice = createSlice({
  name: "addImageToDB",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addImageToDBApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addImageToDBApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addImageToDBApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addImageToDBSlice.reducer;
