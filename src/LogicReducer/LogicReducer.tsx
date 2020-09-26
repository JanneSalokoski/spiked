import React, {useReducer} from 'react';

const initialLogicState = {
	count: 0
};

function LogicReducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {count: state.count + 1};
		default:
			throw new Error();
	}
}

export {LogicReducer, initialLogicState};