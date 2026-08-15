import { createSlice } from "@reduxjs/toolkit";
import { getMe, loginEmployee } from "./authAction";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoding: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoding = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoding = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoding = false;
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoding = false;
      })
      .addCase(getMe.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoding = false;
      })
      .addCase(getMe.rejected, (state) => {
        state.isLoding = false;
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
