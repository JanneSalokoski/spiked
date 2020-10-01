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

function setVhUnit() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function fixViewportUnits() {
	setVhUnit();
	window.addEventListener('resize', () => {
		setVhUnit();
	});
}

function render_application() {
	ReactDOM.render(
		<LogicContextWrapper>
			<App />
		</LogicContextWrapper>
		document.getElementById("root")
	);
}

function init() {
	enable_true_HMR();
	fixViewportUnits();
	render_application();
}

init();

