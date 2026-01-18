import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const RegisterUser = createAsyncThunk(
  "auth/RegisterUser",
  async (user, { rejectwithValue }) => {
    try {
      const response = await axios.post("/register", user);

      setAuthHeader(response.data);
      return await response.data;
    } catch (error) {
      return await rejectwithValue(error.message);
    }
  },
);

export const LogIn = createAsyncThunk(
  "auth/LogIn",
  async (creditials, { rejectwithValue }) => {
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
      return rejectwithValue(rejectwithValue(error.message));
    }
  },
);
