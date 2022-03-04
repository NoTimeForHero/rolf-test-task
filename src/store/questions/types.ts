import { TypeQuestion } from '../../components/AddQuestionForm/types';

export enum ActionType {
  OnStarted = 'OnStarted',
  OnComplted = 'OnComplted',
  OnFailed = 'OnFailed',
}

export type ReducerType = ReducerTypeStarted | ReducerTypeFailed | ReducerTypeCompleted;

interface ReducerTypeStarted {
  type: ActionType.OnStarted
}

interface ReducerTypeFailed {
  type: ActionType.OnFailed,
  error: any,
}

interface ReducerTypeCompleted {
  type: ActionType.OnComplted,
  payload: TypeQuestion
}
