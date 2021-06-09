import * as counterKey from "../keys/counterKey";

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
		case counterKey.INCREMENT:
			return {
				...state,
				value: state.value + 1
			};
		case counterKey.DECREMENT:
			return {
				...state,
				value: state.value - 1
			};
		default:
			return state;
	}
};

export default counterReducer;
