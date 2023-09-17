import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminHomeData = createAsyncThunk("adminHomeData/fetchAdminHomeData", async (api) => {
  const res = await axios.get(`http://localhost:5000/${api}`);
  return res.data;
});

const allUsersSlice = createSlice({
  name: "adminHomeData",
  initialState: {
    isLoading: false,
    error: null,
    adminHomeData: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminHomeData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdminHomeData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adminHomeData = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAdminHomeData.rejected, (state, action) => {
      state.isLoading = false;
      state.adminHomeData = {};
      state.error = action.error.message;
    });
  },
});

export default allUsersSlice.reducer;
