import dayjs from 'dayjs';
import { CHANGE_ACTIVE_DATE } from '../actionTypes';

export default function activeDate(state = '', action) {
	switch (action.type) {
		case CHANGE_ACTIVE_DATE:
			return action.data.date;

		default:
			return state;
	}
}