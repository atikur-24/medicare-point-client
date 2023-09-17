import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("allUsers/fetchAllUsers", async () => {
  const res = await axios.get("http://localhost:5000/users");
  return res.data;
});

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    isLoading: false,
    error: null,
    allUsers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.allUsers = [];
      state.error = action.error.message;
    });
  },
});

export default allUsersSlice.reducer;
