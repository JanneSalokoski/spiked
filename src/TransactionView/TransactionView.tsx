// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'

import './TransactionView.scss';

import { LogicContext } from '../LogicContext/LogicContext';

function CustomerInfo (props) {
  return (
    <div className="customer-info">
      <h3 className="title">Janne Salokoski</h3>
      <p className="saldo">Saldo: 33,50€</p>
      <p className="event-spending">Event: -12,20€</p>
    </div>
  );
}

function Basket (props) {
  return (
    <div className="basket">
      <h4>Current order</h4>
      <p>Items: 4</p>
      <p>Price: 20,00€</p>
    </div>
  );
}

function Controls (props) {
  return (
    <div className="controls">
      <input type="button" className="execute-button" value="Execute" />
      <input type="button" className="cancel-button" value="Cancel" />
    </div>
  );
}

interface TransactionViewPropsInterface {
  [key: string]: any;
}

function TransactionView (props: TransactionViewPropsInterface) {
  const [logicState, logicDispatch] = useContext(LogicContext);

  return (
    <div className='transaction-view'>
      <CustomerInfo />
      <Basket />
      <Controls />
    </div>
  );
}

export default TransactionView;
