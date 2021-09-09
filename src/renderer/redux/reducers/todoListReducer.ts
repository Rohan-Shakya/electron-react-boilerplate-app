import ActionType from '../action-types';
import { Action } from '../actions';

const initialState = {
  loading: false,
  todoList: [
    {
      id: '397125fa-5f2f-484c-babb-25c5c5b1e585',
      description: 'Learn Electron',
    },
  ],
  error: null,
};

const todoListReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: [action.payload, ...state.todoList],
        error: null,
      };
    case ActionType.ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoListReducer;
