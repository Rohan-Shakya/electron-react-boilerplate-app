import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

const reducers = combineReducers({
  todos: todoListReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
