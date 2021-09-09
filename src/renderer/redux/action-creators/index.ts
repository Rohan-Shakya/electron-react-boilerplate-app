import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';
import ActionType from '../action-types';
import { Action } from '../actions';

// eslint-disable-next-line import/prefer-default-export
export const addTodo =
  (description: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ADD_TODO_LOADING });

    try {
      const newTodo = {
        id: uuid(),
        description,
      };
      dispatch({
        type: ActionType.ADD_TODO_SUCCESS,
        payload: newTodo,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch({
        type: ActionType.ADD_TODO_ERROR,
        payload: error.message,
      });
    }
  };
