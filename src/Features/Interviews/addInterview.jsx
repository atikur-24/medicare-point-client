import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const addInterviewApi = createAsyncThunk("addInterview/addInterviewApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/interviews`, data.data);

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

const addInterviewSlice = createSlice({
  name: "addInterview",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addInterviewApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addInterviewApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addInterviewApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addInterviewSlice.reducer;
