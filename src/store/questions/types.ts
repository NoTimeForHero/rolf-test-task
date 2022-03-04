export enum ActionType {
  OnStarted,
  OnComplted,
  OnFailed,
}

export interface ReducerType {
  type: ActionType,
  payload?: any
}
