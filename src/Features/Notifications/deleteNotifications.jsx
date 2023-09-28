import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteNotificationsApi = createAsyncThunk("deleteNotifications/deleteNotificationsApi", async (id) => {
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}/notifications/${id}`);
  return res.data;
});

const deleteNotificationsSlice = createSlice({
  name: "deleteNotifications",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(deleteNotificationsApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteNotificationsApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(deleteNotificationsApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default deleteNotificationsSlice.reducer;
