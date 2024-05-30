// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

import { getTeamsList, getTeamPosts, getTeamDetail } from './Thunk';


const initialState = {
    teams: [],
    isLoading: false,
    error: {},
    teamDetail: null,
    posts: []
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTeamsList.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getTeamsList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teams = action.payload;
        })
        builder.addCase(getTeamDetail.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getTeamDetail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teamDetail = action.payload;
        })
        builder.addCase(getTeamPosts.pending, (state, _) => {
            state.isLoading = true;
        })
        builder.addCase(getTeamPosts.fulfilled, (state, action) => {
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

export const UserAction = teamsSlice.actions;
export default teamsSlice.reducer;