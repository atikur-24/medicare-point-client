import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteHealthTipsApi = createAsyncThunk("deleteHealthTips/deleteHealthTipsApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/allHealthTips/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "lab has been deleted.", "success");
  }

  return res.data;
});

const deleteHealthTipsSlice = createSlice({
  name: "deleteHealthTips",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteHealthTipsApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteHealthTipsApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteHealthTipsApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteHealthTipsSlice.reducer;
