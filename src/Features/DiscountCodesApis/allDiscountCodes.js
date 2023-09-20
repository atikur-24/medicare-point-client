import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllDiscountCodes = createAsyncThunk("allDiscountCodes/fetchAllDiscountCodes", async (email) => {
  const res = await axios.get(`http://localhost:5000/discountCodes/${email}`);
  //   console.log(res.data);
  return res.data;
});

const allDiscountCodesSlice = createSlice({
  name: "allDiscountCodes",
  initialState: {
    isLoading: false,
    error: null,
    allDiscountCodes: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllDiscountCodes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllDiscountCodes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allDiscountCodes = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllDiscountCodes.rejected, (state, action) => {
      state.isLoading = false;
      state.allDiscountCodes = [];
      state.error = action.error.message;
    });
  },
});

export default allDiscountCodesSlice.reducer;
