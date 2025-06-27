import { createStore, combineReducers } from 'redux';
import { gameReducer } from './reducers';

const reducer = combineReducers({
  gameState: gameReducer,
});

export const store = createStore(reducer);
