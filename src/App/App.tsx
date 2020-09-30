// eslint-disable-next-line no-use-before-define
import React from 'react';

import ProductView from '../ProductView/ProductView';
import TransactionView from '../TransactionView/TransactionView';

function App () {
  return (
    <div className='app'>
      <SearchBar />
      <TransactionView />
      <ProductView />
    </div>
  );
}

export default App;
