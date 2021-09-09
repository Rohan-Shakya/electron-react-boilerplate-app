import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducers from './reducers';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
