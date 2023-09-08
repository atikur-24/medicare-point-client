import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const deleteNotificationsApi = createAsyncThunk("deleteNotifications/deleteNotificationsApi", async (id) => {
  const res = await axios.delete(`http://localhost:5000/notifications/${id}`);

  if (res?.data?.deletedCount > 0) {
    Swal.fire("Deleted!", "Image has been deleted.", "success");
  }

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
