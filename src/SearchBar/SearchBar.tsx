// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'

import './SearchBar.scss';

import { LogicContext } from '../LogicContext/LogicContext';

interface SearchBarPropsInterface {
  [key: string]: any;
}

function SearchBar (props: SearchBarPropsInterface) {
  const [logicState, logicDispatch] = useContext(LogicContext);

  return (
    <div className='searchbar'>
      <input type='text' placeholder='Search for customers, products, etc.' />
      <input type='button' value='Search'/>
    </div>
  );
}

export default SearchBar;
