import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNotificationApi = createAsyncThunk("addNotification/addNotificationApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/notifications`, data);
  return res.data;
});

const addNotificationSlice = createSlice({
  name: "addNotification",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(addNotificationApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNotificationApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(addNotificationApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default addNotificationSlice.reducer;
