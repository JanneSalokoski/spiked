import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App/App.tsx';

function enable_true_HMR() {
	if (module.hot) {
	  module.hot.accept()
	}
}

function render_application() {
	ReactDOM.render(
		<App />,
		document.getElementById("root")
	);
}

function init() {
	enable_true_HMR();
	render_application();
}

init();

