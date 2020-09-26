import React, {useReducer, useContext} from 'react';

import {LogicReducer, initialLogicState} from '../LogicReducer/LogicReducer.tsx';

const LogicContext = React.createContext();

function LogicContextWrapper(props) {
	const [logicState, logicDispatch] = useReducer(LogicReducer, initialLogicState);

	return (
		<LogicContext.Provider value={[logicState, logicDispatch]}>
			{props.children}
		</LogicContext.Provider>
	);	
}

export {LogicContext, LogicContextWrapper};