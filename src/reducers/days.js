import dayjs from 'dayjs';
import { ADD_DAY, ADD_ITEM } from '../actionTypes';

export default function days(state = [], action) {
	switch (action.type) {
		case ADD_DAY:
			// Place day in appropriate spot
			let i = state.length;
			while (dayjs(state[i - 1].date).isAfter(dayjs(action.data.date))) { // Will this break if the day is the last day?
				i--;
			}
			if (state[i] && dayjs(state[i].date).isSame(dayjs(action.data.date), 'day')) {
				// Day already exists
				return state;
			}
			return [...state.slice(0, i), action.data, ...state.slice(i)];

		case ADD_ITEM:
			return state.map(day => {
				if (day.date !== action.data.date) {
					return day;
				}
				return {...day, items: [...day.items, action.data.item.id]};
			});
		
		default:
			return state;
	}
}