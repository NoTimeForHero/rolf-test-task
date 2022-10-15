import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './root';

export const initializeStore = (reducer: any, devToolsOptions = true) => configureStore({
  reducer,
  devTools: devToolsOptions,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export const store = initializeStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default { initializeStore, store };
