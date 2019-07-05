import { CHANGE_SEARCH_TEXT } from '../actionTypes';

export default function search(state = '', action) {
	switch (action.type) {
		case CHANGE_SEARCH_TEXT:
			return action.data.text;

		default:
			return state;
	}
}
