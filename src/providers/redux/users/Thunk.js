// * LIB
import { createAsyncThunk } from '@reduxjs/toolkit'

// * IMPORT
import UserService from 'src/services/UserService'

export const getUserList = createAsyncThunk("user/get/all", async (_, { rejectWithValue }) => {
    try {
        const response = await UserService.getAllUsers()
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})
