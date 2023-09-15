import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotificationsByEmail = createAsyncThunk("notificationsByEmail/fetchNotificationsByEmail", async ({ email, role }) => {
  const res = await axios.get(`http://localhost:5000/notifications?email=${email}&role=${role}`);
  //   console.log(res.data);
  return res.data;
});

const notificationsByEmailSlice = createSlice({
  name: "notificationsByEmail",
  initialState: {
    isLoading: false,
    error: null,
    allNotifications: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotificationsByEmail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotificationsByEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allNotifications = action.payload;
      state.error = null;
    });
    builder.addCase(fetchNotificationsByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.allNotifications = [];
      state.error = action.error.message;
    });
  },
});

export default notificationsByEmailSlice.reducer;
