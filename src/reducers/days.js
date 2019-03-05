import dayjs from 'dayjs';
import { ADD_DAY, ADD_ITEM, DELETE_ITEM, MOVE_ITEM } from '../actionTypes';

export default function days(state = [], action) {
	switch (action.type) {
		case ADD_DAY:
			// Place day in appropriate spot
			let i = state.length;
			while (
				i > 0 &&
				dayjs(state[i - 1].date).isAfter(dayjs(action.data.date))
			) {
				i--;
			}
			if (
				state[i] &&
				dayjs(state[i].date).isSame(dayjs(action.data.date), 'day')
			) {
				// Day already exists
				return state;
			}
			return [...state.slice(0, i), action.data, ...state.slice(i)];

		case ADD_ITEM:
			return state.map((day) => {
				if (day.date !== action.data.date) {
					return day;
				}
				return { ...day, items: [...day.items, action.data.item.id] };
			});

		case DELETE_ITEM:
			return state.map((d) => {
				if (d.date === action.data.date)
					return {
						...d,
						items: d.items.filter((i) => i !== action.data.id),
					};
				return d;
			});

		case MOVE_ITEM:
			const { destination, source } = action.data;
			const item = state.find(
				(day) => day.date === destination.droppableId
			).items[destination.index];
			const itemRemoved = state.map((day) => {
				const i = destination.index;
				if (day.date === destination.droppableId)
					return {
						...day,
						items: [
							...day.items.slice(0, i),
							...day.items.slice(i + 1),
						],
					};
				return day;
			});
			// Adding the item back in
			return itemRemoved.map((day) => {
				const i = source.index;
				if (day.date === source.droppableId)
					return {
						...day,
						items: [
							...day.items.slice(0, i),
							item,
							...day.items.slice(i),
						],
					};
				return day;
			});

		default:
			return state;
	}
}
