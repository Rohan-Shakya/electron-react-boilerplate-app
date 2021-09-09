import ActionType from '../action-types';

interface AddTodoLoadingAction {
  type: ActionType.ADD_TODO_LOADING;
}

interface AddTodoSuccessAction {
  type: ActionType.ADD_TODO_SUCCESS;
  payload: Todo;
}

interface AddTodoErrorAction {
  type: ActionType.ADD_TODO_ERROR;
  payload: string;
}

export type Action =
  | AddTodoLoadingAction
  | AddTodoSuccessAction
  | AddTodoErrorAction;
