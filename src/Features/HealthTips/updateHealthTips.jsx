import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const updateHealthTipsApi = createAsyncThunk("updateHealthTips/updateHealthTipsApi", async (data) => {
  const res = await axios.patch(`http://localhost:5000/allHealthTips/${data._id}`, {
    body: data.data,
  });

  if (res.data.modifiedCount > 0) {
    Swal.fire("Updated Successfully", "success");
  }

  return res.data;
});

const updateHealthTipsSlice = createSlice({
  name: "updateHealthTips",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(updateHealthTipsApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateHealthTipsApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(updateHealthTipsApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default updateHealthTipsSlice.reducer;
