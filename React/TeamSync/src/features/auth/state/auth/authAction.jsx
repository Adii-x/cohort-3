import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getMe = createAsyncThunk("auth/get-me", async (_, thunkApi) => {
  try {
    let res = await api.get("/auth/me");
    return res.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
