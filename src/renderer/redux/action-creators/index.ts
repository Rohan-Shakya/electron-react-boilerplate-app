import { Dispatch } from 'redux';
import ActionType from '../action-types';
import { Action } from '../actions';

// eslint-disable-next-line import/prefer-default-export
export const addTodo = (todo: Todo) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.ADD_TODO_LOADING });

  try {
    dispatch({
      type: ActionType.ADD_TODO_SUCCESS,
      payload: todo,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.ADD_TODO_ERROR,
      payload: error.message,
    });
  }
};
