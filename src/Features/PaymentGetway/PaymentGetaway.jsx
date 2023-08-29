import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import Swal from "sweetalert2";

export const sslPaymentApi = createAsyncThunk("sslPayment/sslPaymentApi", async (data) => {
  // console.log(data);
  const res = await axios.post(`http://localhost:5000/payment`, data);

  // console.log(res.data);

  window.location.replace(res.data.url);

  //   if (res.data.insertedId) {
  //     Swal.fire({
  //       title: "success",
  //       text: "Lab added Successfully",
  //       icon: "success",
  //       confirmButtonText: "Cool",
  //     });
  //     data.reset();
  //   }

  return res.data;
});

const sslPaymentSlice = createSlice({
  name: "sslPayment",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(sslPaymentApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sslPaymentApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(sslPaymentApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default sslPaymentSlice.reducer;
