import { Dispatch } from 'redux';
import { TypeQuestion } from '../../components/AddQuestionForm/types';
import { ActionType, ReducerType } from './types';
import initialState from './defaultState';
import ajaxJSON from '../../utils/ajax';
import formatDate from '../../utils/date';

export const AddQuestion = (question: TypeQuestion, onSuccess: () => void) => async (dispatch: Dispatch<ReducerType>) => {
  try {
    dispatch({ type: ActionType.OnStarted });
    // eslint-disable-next-line no-param-reassign
    question.date = formatDate(new Date());
    // Симуляция задержки
    // eslint-disable-next-line no-promise-executor-return
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    await ajaxJSON('http://httpbin.org/post', question);
    dispatch({ type: ActionType.OnComplted, payload: question });
    onSuccess?.call(null);
  } catch (ex) {
    dispatch({ type: ActionType.OnFailed, error: ex });
    // eslint-disable-next-line no-console
    console.error(ex);
  }
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const questionReducer = (state = initialState, action : ReducerType) => {
  switch (action.type) {
    case ActionType.OnStarted:
      return { ...state, isLoading: true, error: null };
    case ActionType.OnFailed:
      return { ...state, isLoading: false, error: action.error };
    case ActionType.OnComplted:
      return {
        ...state, isLoading: false, error: null, values: state.values.unshift(action.payload as TypeQuestion),
      };
    default:
      return state;
  }
};
