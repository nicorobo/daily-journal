import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';
import initialState from './initialData';

const store = createStore(
	reducers,
	Object.assign(loadState() || initialState, {
		activeDate: initialState.activeDate,
	}),
	compose(applyMiddleware(thunk))
);

// Add to compose when you want hot reloading
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Persist state with localStorage
store.subscribe(() => {
	saveState(store.getState());
});

export default store;
