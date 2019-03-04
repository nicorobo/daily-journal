import { 
	ADD_ITEM,
	DELETE_ITEM,
	MOVE_ITEM,
	ADD_DAY,
	CHANGE_ACTIVE_DATE,
} from './actionTypes';
import dayjs from 'dayjs';
import uniqid from 'uniqid';

export const addItem = (content, date = dayjs().format('YYYY-MM-DD')) => {
	return (dispatch, getState) => {
		if (getState().days.findIndex(day => day.date === date) === -1) {
			dispatch(addDay(date));
		}
		dispatch({
			type: ADD_ITEM,
			data: {
				date,
				item: {
					id: uniqid(),
					content,
					created: Date.now(),
				}
			}
		});
	}
};

export const deleteItem = (id, date) => ({
	type: DELETE_ITEM,
	data: {
		id,
		date
	}
});

export const addDay = (date = dayjs().format('YYYY-MM-DD')) => ({
	type: ADD_DAY,
	data: {
		date,
		items: [],
	}
});

export const changeActiveDate = (date = dayjs().format('YYYY-MM-DD')) => ({
	type: CHANGE_ACTIVE_DATE,
	data: {
		date
	}
});

export const moveItem = (destination, source) => ({
	type: MOVE_ITEM,
	data: { destination, source }
});