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

export const getUserDetail = createAsyncThunk("user/get/detail", async (params, { rejectWithValue }) => {
    try {
        const response = await UserService.getUserDetail(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getUserPost = createAsyncThunk("user/get/post", async (params, { rejectWithValue }) => {
    try {
        const response = await UserService.getUserPost(params)
         // Use Promise.all to wait for all the promises to resolve
         const postList = await Promise.all(response.map(async (post) => {
            const responseComment = await UserService.getUserPostComment({
                post_id: post?.post_post_id
            });

            return {
                ...post,
                comments: responseComment
            };
        }));
        return postList
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getUserTeams = createAsyncThunk("user/get/teams", async (params, { rejectWithValue }) => {
    try {
        const response = await UserService.getUserTeams(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getUserFriends = createAsyncThunk("user/get/friends", async (params, { rejectWithValue }) => {
    try {
        const response = await UserService.getUserFriends(params)
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})