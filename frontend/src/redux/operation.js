import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const RegisterUser = createAsyncThunk(
  "auth/RegisterUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", user);

      setAuthHeader(response.data.access_token);
      return await response.data;
    } catch (error) {
      return await rejectWithValue(error.message);
    }
  },
);

export const LogIn = createAsyncThunk(
  "auth/LogIn",
  async (creditials, { rejectWithValue }) => {
    try {
      const data = new URLSearchParams();
      data.append("username", creditials.username);
      data.append("password", creditials.password);
      const response = await axios.post("/token", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setAuthHeader(response.data);

      return await response.data;
    } catch (error) {
      return rejectWithValue((error.message));
    }
  },
);

export const GetUser = createAsyncThunk(
  "auth/GetUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      if (!token) return rejectWithValue("No token");

      setAuthHeader(token);
      const response = await axios.get("/user");

      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

