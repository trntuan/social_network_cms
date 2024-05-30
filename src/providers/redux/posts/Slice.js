// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

import { getPostList } from './Thunk';

const initialState = {
    posts: [],
    isLoading: false,
    error: {}
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPostList.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getPostList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        builder.addMatcher(
			(action) => action.type.endsWith('/rejected'),
			(state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			}
		);
		builder.addDefaultCase((state) => {
			state.error = null;
		});
    }
});

export const PostAction = postSlice.actions;
export default postSlice.reducer;