import { createSlice } from "@reduxjs/toolkit";
import { LogIn, RegisterUser } from "./operation";

const AuthInitialState = {
  user: { username: null, email: null },
  token: "",
  isLogged: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: AuthInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(LogIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const AuthReducer = AuthSlice.reducer;
