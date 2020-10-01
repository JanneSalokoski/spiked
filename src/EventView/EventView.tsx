// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'

import './EventView.scss';

import { LogicContext } from '../LogicContext/LogicContext';

interface EventViewPropsInterface {
  [key: string]: any;
}

function EventView (props: EventViewPropsInterface) {
  const [logicState, logicDispatch] = useContext(LogicContext);

  return (
    <div className='EventView'>
      <div className='event-info'>
        <h3 className='title'>Rapujuhlat</h3>
        <p><strong>21.30</strong></p>
        <p>26. syyskuuta</p>
      </div>
      <div className='economy'>
        <h4>Talous</h4>
        <p>Kassa: 130,20€</p>
        <p>Myynti: +40€</p>
      </div>
    </div>
  );
}

export default EventView;
