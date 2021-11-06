import { createStore } from 'redux';
import { reducer } from './reducers';
// create store that contains all of the global state
const store = createStore(reducer);

export default store;