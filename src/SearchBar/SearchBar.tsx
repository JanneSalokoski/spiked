// eslint-disable-next-line no-use-before-define
import React, { useContext, useState } from 'react'

import './SearchBar.scss';

import { LogicContext } from '../LogicContext/LogicContext';

interface SearchBarPropsInterface {
  [key: string]: any;
}

function SearchBar (props: SearchBarPropsInterface) {
  const [logicState, logicDispatch] = useContext(LogicContext);

  function filterItems (items: Array<any>, query:string): Array<any> {
    return items.filter(item => 
      item.name.toLowerCase().match(query.toLowerCase())
    );
  }

  function getResultItem (customer: Object) {
    return (<p>{customer.name}</p>);
  }

  function getResultItems (query: string) {
    return (
      <div>
        {filterItems(logicState.customers, query).map(customer => getResultItem(customer))}
        {filterItems(logicState.products, query).map(product => getResultItem(product))}
      </div>
    );
  }

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  function handleFocus (event: Event) {
    if (query.length > 0) {
      setOpen(true);
    }
  }

  function handleBlur (event: Event) {
    setOpen(false);
  }

  function handleChange (event: Event) {
    setQuery(event.target.value);
    if (open === false) {
      setOpen(true);
    }

    // Close if nothing to search
    if (event.target.value.length === 0) {
      setOpen(false);
    }
  }

  return (
    <div className={`search ${open ? 'open' : ''}`}>
      <div className='searchbar'>
        <input type='text'
          placeholder='Search for customers, products, etc.'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={query}
        />
        <input type='button' value='Search'/>
      </div>
      <div className='results'>
        {getResultItems(query)}
      </div>
    </div>
  );
}

export default SearchBar;
