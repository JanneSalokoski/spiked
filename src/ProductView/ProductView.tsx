import React, {useContext} from 'react'

import "./ProductView.scss";

import {LogicContext} from '../LogicContext/LogicContext.tsx';

function ProductView(props) {
	const [logicState, logicDispatch] = useContext(LogicContext);

	function handleIncrement(event) {
		logicDispatch({type: "increment"});
	}

	return (
		<div className="ProductView">
			<p>Count: {logicState.count}</p>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
}

export default ProductView;