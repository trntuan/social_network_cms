// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

import { getUserList } from './Thunk';


const initialState = {
    users: [],
    isLoading: false,
    error: {}
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