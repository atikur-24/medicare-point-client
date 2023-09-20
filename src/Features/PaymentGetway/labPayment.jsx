import emailjs from "@emailjs/browser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const labSSLPaymentApi = createAsyncThunk("labSSLPayment/labSSLPaymentApi", async (data) => {
  const templateParams = data?.personalInfo;

  const res = await axios.post(`http://localhost:5000/labPayment`, data);

  if (res.data.url) {
    // window.location.replace(res.data.url);
    templateParams.transId = res.data.transId;
    templateParams.totalPayment = res.data.totalPayment;
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID2, templateParams, import.meta.env.VITE_PUBLIC_KEY).then(
      (response) => {
        window.location.replace(res.data.url);
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }

  return res.data;
});

const labSSLPaymentSlice = createSlice({
  name: "labSSLPayment",
  initialState: {
    isLoading: false,
    error: null,
    response: {},
  },
  extraReducers: (builder) => {
    builder.addCase(labSSLPaymentApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(labSSLPaymentApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(labSSLPaymentApi.rejected, (state, action) => {
      state.isLoading = false;
      state.response = {};
      state.error = action.error.message;
    });
  },
});

export default labSSLPaymentSlice.reducer;
