import React, {useContext} from 'react';

import {LogicContextWrapper} from '../LogicContext/LogicContext.tsx';

import ProductView from '../ProductView/ProductView.tsx';

function App() {
	return (
		<LogicContextWrapper>
			<ProductView />
		</LogicContextWrapper>
	);
}

export default App;