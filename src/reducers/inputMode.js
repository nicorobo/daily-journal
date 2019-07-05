import { CHANGE_INPUT_MODE } from '../actionTypes';

export default function inputMode(state = 'journal', action) {
	switch (action.type) {
		case CHANGE_INPUT_MODE:
			return action.data.mode;

		default:
			return state;
	}
}
