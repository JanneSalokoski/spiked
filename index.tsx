import React from 'react';
import ReactDOM from 'react-dom';

import './src/Style/Index.scss';

import { LogicContextWrapper } from './src/LogicContext/LogicContext';
import App from './src/App/App.tsx';

function enable_true_HMR() {
	if (module.hot) {
	  module.hot.accept()
	}
}

function render_application() {
	ReactDOM.render(
		<LogicContextWrapper>
			<App />,
		</LogicContextWrapper>
		document.getElementById("root")
	);
}

function init() {
	enable_true_HMR();
	render_application();
}

init();

