import emailjs from "@emailjs/browser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import moment from "moment";
// import Swal from "sweetalert2";

export const sslPaymentApi = createAsyncThunk("sslPayment/sslPaymentApi", async (data) => {
  // console.log(data.paymentDetails);
  const templateParams = data?.paymentDetails;

  // notificationData.date = moment().format("Do MMM YY");
  // notificationData.photoURL = "https://i.ibb.co/QcwbgTF/lab.png";
  // notificationData.name = "medicines";
  // notificationData.url = "order-history";
  // notificationData.deliveryTime = "Your order is being processing";

  const res = await axios.post(`http://localhost:5000/payment`, data);

  if (res.data.url) {
    // window.location.replace(res.data.url);

    templateParams.transId = res.data.transId;
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
