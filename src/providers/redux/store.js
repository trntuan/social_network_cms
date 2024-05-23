//* LIB
// eslint-disable-next-line import/no-extraneous-dependencies
import loggerMiddleware from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';

// * IMPORT
import UserReducer from './users/Slice'
import TeamReducer from './teams/Slice'

const shouldEnvironment  = import.meta.env.VITE_NODE_APP === 'DEV'
const middlewares = [];

if (shouldEnvironment) {
	middlewares.push(loggerMiddleware);
}

export const store = configureStore({
	reducer: {
        users: UserReducer,
		teams: TeamReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
	devTools: shouldEnvironment,
});
