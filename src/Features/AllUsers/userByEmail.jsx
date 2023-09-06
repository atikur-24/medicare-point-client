import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserByEmail = createAsyncThunk("userByEmail/fetchUserByEmail", async (email) => {
  const res = await axios.get(`http://localhost:5000/users/${email}`);
  return res.data;
});

const userByEmailSlice = createSlice({
  name: "userByEmail",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default userByEmailSlice.reducer;
