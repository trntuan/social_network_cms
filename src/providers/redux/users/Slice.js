// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

import { getUserList, getUserPost, getUserTeams ,getUserDetail, getUserFriends } from './Thunk';


const initialState = {
    users: [],
    isLoading: false,
    error: {},
    userDetail: {},
    posts: [],
    teams: [],
    friends: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(getUserDetail.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getUserDetail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userDetail = action.payload;
        })
        builder.addCase(getUserPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        builder.addCase(getUserTeams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teams = action.payload;
        })
        builder.addCase(getUserFriends.fulfilled, (state, action) => {
            state.isLoading = false;
            state.friends = action.payload;
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

export const UserAction = usersSlice.actions;
export default usersSlice.reducer;