import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteInterviewApi = createAsyncThunk("deleteInterview/deleteInterviewApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/interviews/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "lab has been deleted.", "success");
  }

  return res.data;
});

const deleteInterviewSlice = createSlice({
  name: "deleteInterview",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteInterviewApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteInterviewApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteInterviewApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteInterviewSlice.reducer;
