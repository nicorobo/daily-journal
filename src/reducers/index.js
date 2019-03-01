import { combineReducers } from 'redux';
import activeDate from './activeDate';
import items from './items';
import days from './days';

export default combineReducers({
	activeDate,
	items,
	days,
});