// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    isLoading: false,
    error: {}
};

const metadataSlice = createSlice({
    name: 'metadata',
    initialState,
    reducers: {
        getMetadataRequest: (state) => {
            state.isLoading = true
        },
    }
});

export const { getMetadataRequest } = metadataSlice.actions;
export default metadataSlice.reducer;