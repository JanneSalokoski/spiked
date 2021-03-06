// eslint-disable-next-line no-use-before-define
import React, { useContext, FunctionComponent } from 'react';
import './ProductView.scss';
import API from '../API/API';
import { LogicContext } from '../LogicContext/LogicContext';
import priceFormat from '../Utilities/Price';

interface ProductElementPropsInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  display: boolean;
}

const ProductElement: FunctionComponent = (props: ProductElementPropsInterface) => {
  return (
    <div className="product-element">
      <h3 className="title">{props.name}</h3>
      <p className="price">{priceFormat(props.price)}</p>
    </div>
  );
}

const ProductView: FunctionComponent = () => {
  const [logicState, logicDispatch] = useContext(LogicContext);

  async function handleLoadProductsClick (event: MouseEvent) {
    const request = new API.GetProducts();
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
    return (
      <ProductElement
        id = { productObject.id }
        key = { productObject.id }
        name = { productObject.name }
        description = { productObject.description }
        price = { productObject.price }
      />
    );
  }

  function createProductElements (productObjects: Array<ProductObjectInterface>) {
    console.log(productObjects);
    return productObjects.map(productObject => createProductElement(productObject));
  }

  return (
    <div className='product-view'>
      { createProductElements(logicState.products) }
    </div>
  );
}

export default ProductView;
