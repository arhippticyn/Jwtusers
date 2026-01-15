import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const RegisterUser = createAsyncThunk('register/RegisterUser', async (user, { rejectwithValue }) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/register', user)

        return await response.data

    } catch (error) {
        return await rejectwithValue(error.message)
    }
})

