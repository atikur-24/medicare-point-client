import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const updateInterviewApi = createAsyncThunk("updateInterview/updateInterviewApi", async (data) => {
  const res = await axios.put(`http://localhost:5000/interviews/${data._id}`, {
    body: data.data,
  });

  if (res.data.modifiedCount > 0) {
    Swal.fire("Updated Successfully", "success");
  }

  return res.data;
});

const updateInterviewSlice = createSlice({
  name: "updateInterview",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(updateInterviewApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateInterviewApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(updateInterviewApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default updateInterviewSlice.reducer;
