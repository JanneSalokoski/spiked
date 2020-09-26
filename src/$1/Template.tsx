import React, {useContext} from 'react'

import "./Template.scss";

import {LogicContext} from '../LogicContext/LogicContext.tsx';

function Template(props) {
	const [logicState, logicDispatch] = useContext(LogicContext);

	return (
		<div className="Template">

		</div>
	);
}

export default Template;