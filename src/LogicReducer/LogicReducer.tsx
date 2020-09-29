import React, {useReducer} from 'react';

const initialLogicState = {
	count: 0,
	products: []
};

function LogicReducer(state, action) {
	let newState = {...state};

	const handlers = {
		"set_products": (payload) => newState.products = payload,
		"set_customers": (payload) => newState.customers = payload,
		"set_transactions": (payload) => newState.transactions = payload,
	};	

	handlers[action.type](action.payload);
	return newState;
}

export {LogicReducer, initialLogicState};