import { ADD_ITEM, DELETE_ITEM } from '../actionTypes';

export default function items(state = {}, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, [action.data.item.id]: action.data.item };

		case DELETE_ITEM:
			const { [action.data.id]: value, ...otherItems } = state;
			return otherItems;

		default:
			return state;
	}
}
