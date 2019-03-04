import dayjs from 'dayjs';
import { ADD_DAY, ADD_ITEM, DELETE_ITEM, MOVE_ITEM } from '../actionTypes';

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

		case DELETE_ITEM:
			const { id, date } = action.data;
			return state.map(d => {
				if (d.date === date) return {...d, items: d.items.filter(i => i !== id)};
				return d;
			})

		case MOVE_ITEM:
			const { destination, source } = action.data;
			const item = state.find(d => d.date === destination.droppableId).items[destination.index];
			const itemRemoved = state.map(d => {
				const i = destination.index;
				if (d.date === destination.droppableId) return {...d, items: [...d.items.slice(0, i), ...d.items.slice(i+1)]};
				return d;
			});
			return itemRemoved.map(d => {
				const i = source.index;
				if (d.date === source.droppableId) return {...d, items: [...d.items.slice(0, i), item, ...d.items.slice(i)]};
				return d;
			});
		
		default:
			return state;
	}
}