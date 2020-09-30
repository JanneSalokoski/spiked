// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect } from 'react';

import { LogicContext } from '../LogicContext/LogicContext';
import ProductView from '../ProductView/ProductView';
import TransactionView from '../TransactionView/TransactionView';
import SearchBar from '../SearchBar/SearchBar';

import API from '../API/API';

function App () {
  const [logicState, logicDispatch] = useContext(LogicContext);

  async function loadCustomerData () {
    const request = new API.GetCustomers();
    const customers = await request.fetch();
    logicDispatch({ type: 'set_customers', payload: customers });
  }

  async function loadProductData () {
    const request = new API.GetProducts();
    const products = await request.fetch();
    logicDispatch({ type: 'set_products', payload: products });
  }

  async function loadTransactionData () {
    const request = new API.GetTransactions();
    const transactions = await request.fetch();
    logicDispatch({ type: 'set_transactions', payload: transactions });
  }

  useEffect(() => {
    loadCustomerData();
    loadProductData();
    loadTransactionData();
  }, []);

  return (
    <div className='app'>
      <SearchBar />
      <TransactionView />
      <ProductView />
    </div>
  );
}

export default App;
