import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const updateLabTestApi = createAsyncThunk("updateLabTest/updateLabTestApi", async (data) => {
  const res = await axios.put(`http://localhost:5000/labItems/${data._id}`, data);

  if (res.data.modifiedCount > 0) {
    Swal.fire("Updated Successfully", "success");
  }

  return res.data;
});

const updateLabTestsSlice = createSlice({
  name: "updateLabTest",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(updateLabTestApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateLabTestApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(updateLabTestApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default updateLabTestsSlice.reducer;
