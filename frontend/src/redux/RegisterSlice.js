import { createSlice } from "@reduxjs/toolkit"
import { RegisterUser } from "./operation"

const RegisterInitialState = {
    isLoading: false,
    register: [],
    error: null
}

const RegisterSlice = createSlice({
    name: 'register',
    initialState: RegisterInitialState,

    extraReducers: (builder) => {
        builder
        .addCase(RegisterUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(RegisterUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.register.push(action.payload)
        })
        .addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export const RegisterReducer = RegisterSlice.reducer