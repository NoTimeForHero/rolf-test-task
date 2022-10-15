import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeQuestion } from '../../components/AddQuestionForm/types';
import ajaxJSON from '../../utils/ajax';
import formatDate from '../../utils/date';

export const AddQuestion = createAsyncThunk<
TypeQuestion,
TypeQuestion,
{ rejectValue: string }
>(
  'questions/addQuestion',
  async (question, thunk) => {
    try {
      // eslint-disable-next-line no-param-reassign
      question.date = formatDate(new Date());
      // Симуляция задержки
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (Math.random() * 100 < 70) throw new Error('Random failed!');
      await ajaxJSON('http://httpbin.org/post', question);
      return question;
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.error('AddQuestion->reject', ex);
      if (typeof ex === 'string') return thunk.rejectWithValue(ex);
      if (ex instanceof Error) return thunk.rejectWithValue(ex.message);
      return thunk.rejectWithValue(JSON.stringify(ex));
    }
  },
);

export default { AddQuestion };
