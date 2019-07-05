import { combineReducers } from 'redux';
import activeDate from './activeDate';
import inputMode from './inputMode';
import search from './search';
import items from './items';
import days from './days';

export default combineReducers({
	activeDate,
	inputMode,
	search,
	items,
	days,
});
