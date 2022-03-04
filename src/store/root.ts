import { combineReducers } from 'redux';
import { questionReducer } from './questions';

export const rootReducer = combineReducers({
  questions: questionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
