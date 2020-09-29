// eslint-disable-next-line no-use-before-define
import React from 'react';

import { LogicContextWrapper } from '../LogicContext/LogicContext';
import ProductView from '../ProductView/ProductView';

function App () {
  return (
    <LogicContextWrapper>
      <ProductView />
    </LogicContextWrapper>
  );
}

export default App;
