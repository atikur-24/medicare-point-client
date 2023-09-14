import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMedicines = createAsyncThunk("medicines/fetchAllMedicines", async () => {
  const res = await axios.get("http://localhost:5000/all-medicines");
  return res.data;
});

const medicinesSlice = createSlice({
  name: "medicines",
  initialState: {
    isLoading: false,
    medicines: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMedicines.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMedicines.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.medicines = payload;
      state.error = null;
    });
    builder.addCase(fetchAllMedicines.rejected, (state, action) => {
      state.isLoading = false;
      state.medicines = [];
      state.error = action.error.message;
    });
  },
});

export default medicinesSlice.reducer;
