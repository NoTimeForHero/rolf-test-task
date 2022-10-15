import { combineReducers } from '@reduxjs/toolkit';
// import { questionReducer } from './questions';
import questionsSlice from './questions/slice';

export const rootReducer = combineReducers({
  [questionsSlice.name]: questionsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
