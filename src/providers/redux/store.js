//* LIB
// eslint-disable-next-line import/no-extraneous-dependencies
import loggerMiddleware from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';

// * IMPORT
import MetadataReducer from './metadatas/Slice'

const shouldEnvironment = process.env.NODE_APP === "DEV";

const middlewares = [];

if (shouldEnvironment) {
	middlewares.push(loggerMiddleware);
}

export const store = configureStore({
	reducer: {
        metadatas: MetadataReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
	devTools: shouldEnvironment,
});
