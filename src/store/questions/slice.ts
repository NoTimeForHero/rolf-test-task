/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { TypeQuestion } from '../../components/AddQuestionForm/types';
import initialState from './defaultState';
import { AddQuestion } from './thunks';

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    // onStart(state) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // onError(state, action: PayloadAction<unknown>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // onSuccess(state, action: PayloadAction<TypeQuestion>) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.values.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(AddQuestion.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    }).addCase(AddQuestion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.values.push(action.payload);
    }).addCase(AddQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? '';
    });
  },
});

export default questionsSlice;
