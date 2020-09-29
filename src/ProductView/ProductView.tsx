import React, {useContext} from 'react'

import "./ProductView.scss";

import API from "../API/API.tsx";

import {LogicContext} from '../LogicContext/LogicContext.tsx';

function ProductView(props) {
	const [logicState, logicDispatch] = useContext(LogicContext);

	async function handleLoadProductsClick(event) {
		const request = new API.Get_Products();
		const products = await request.fetch();
		logicDispatch({type: "set_products", payload: products});
	}

	function createProductElement(productObject) {
		return (
			<div className="product">
				{productObject.name}
			</div>
		);
	}

	function createProductElements(productObjects) {
		return productObjects.map(productObject => createProductElement(productObject));
	}

	return (
		<div className="ProductView">
			<div>
				{ createProductElements(logicState.products) }
			</div>
			<button onClick={handleLoadProductsClick}>Load products</button>
		</div>
	);
}

export default ProductView;