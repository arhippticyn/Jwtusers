import { createSlice } from "@reduxjs/toolkit";
import { GetUser, LogIn, RegisterUser } from "./operation";

const AuthInitialState = {
  user: { username: null, email: null },
  token: "",
  isLogged: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: AuthInitialState,

  reducers: {
    setToken(state,action) {
      state.token = action.payload
      state.isLogged = true
    },
    LogOut(state, action) {
      state.user = { username: null, email: null }
      state.token = ''
      state.isLogged = false
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLogged = true;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(LogIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.token = action.payload.access_token;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(GetUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const { setToken, LogOut } = AuthSlice.actions

export const AuthReducer = AuthSlice.reducer;
