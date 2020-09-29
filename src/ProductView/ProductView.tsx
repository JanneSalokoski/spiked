// eslint-disable-next-line no-use-before-define
import React, { useContext, FunctionComponent } from 'react';
import './ProductView.scss';
import API from '../API/API';
import { LogicContext } from '../LogicContext/LogicContext';

const ProductView: FunctionComponent = () => {
  const [logicState, logicDispatch] = useContext(LogicContext);

  async function handleLoadProductsClick (event: MouseEvent) {
    const request = new API.Get_Products();
    const products = await request.fetch();
    logicDispatch({ type: 'set_products', payload: products });
  }

  interface ProductObjectInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    display: number;
  }

  function createProductElement (productObject: ProductObjectInterface) {
    console.log(productObject);
    return (
      <div className='product'>
        {productObject.name}
      </div>
    );
  }

  function createProductElements (productObjects: Array<ProductObjectInterface>) {
    return productObjects.map(productObject => createProductElement(productObject));
  }

  return (
    <div className='ProductView'>
      <div>
        { createProductElements(logicState.products) }
      </div>
      <button onClick={handleLoadProductsClick}>Load products</button>
    </div>
  );
}

export default ProductView;
