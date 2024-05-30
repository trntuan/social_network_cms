// * LIB
import { createAsyncThunk } from '@reduxjs/toolkit'

// * IMPORT
import PostService from 'src/services/PostService'

export const getPostList = createAsyncThunk("post/get/all", async (params, { rejectWithValue }) => {
    try {
        const response = await PostService.getAllPost(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getPostDetail = createAsyncThunk("post/get/detail", async (params, { rejectWithValue }) => {
    try {
        const response = await PostService.getDetailPost(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})