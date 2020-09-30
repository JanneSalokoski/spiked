// eslint-disable-next-line no-use-before-define
import React from 'react';

import { LogicContextWrapper } from '../LogicContext/LogicContext';
import ProductView from '../ProductView/ProductView';
import TransactionView from '../TransactionView/TransactionView';

function App () {
  return (
    <LogicContextWrapper>
      <TransactionView />
      <ProductView />
    </LogicContextWrapper>
  );
}

export default App;
