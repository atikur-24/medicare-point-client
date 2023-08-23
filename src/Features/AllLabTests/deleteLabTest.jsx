import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteLabTestApi = createAsyncThunk("updateLabTest/deleteLabTestApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/labItems/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "lab has been deleted.", "success");
  }

  return res.data;
});

const deleteLabTestSlice = createSlice({
  name: "deleteLabTestApi",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteLabTestApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteLabTestApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteLabTestApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteLabTestSlice.reducer;
