import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { questionReducer } from './index';
import { ActionType } from './types';
import initialState from './defaultState';
import { TypeQuestion } from '../../components/AddQuestionForm/types';

const makeStore = () => createStore(questionReducer, applyMiddleware(thunk));

test('Test ActionType.OnStarted', () => {
  const store = makeStore();
  store.dispatch({ type: ActionType.OnStarted });
  const state = store.getState();
  expect(state.isLoading).toBe(true);
  expect(state.error).toBe(null);
});

test('Test ActionType.OnFailed', () => {
  const ex = new Error('Example error!');
  const store = makeStore();
  store.dispatch({ type: ActionType.OnFailed, error: ex });
  const state = store.getState();
  expect(state.isLoading).toBe(false);
  expect(state.error).toBe(ex);
});

test('Test ActionType.OnComplted', () => {
  const payload : TypeQuestion = {
    name: 'name', text: 'text', date: 'date', carModel: 'carModel', carBrand: 'carBrand', email: 'email',
  };
  const store = makeStore();
  store.dispatch({ type: ActionType.OnComplted, payload });
  const state = store.getState();
  expect(state.isLoading).toBe(false);
  expect(state.error).toBe(null);
  expect(state.values.get(0)).toBe(payload);
  expect(state.values.size).toBe(initialState.values.size + 1);
});

export {};
