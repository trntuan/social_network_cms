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

export const getCommentDetail = createAsyncThunk("post/get/comment", async (params, { rejectWithValue }) => {
    try {
        const response = await PostService.getComments(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getPostReport = createAsyncThunk("post/get/report", async (params, { rejectWithValue }) => {
    try {
        const response = await PostService.getPostReport(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})