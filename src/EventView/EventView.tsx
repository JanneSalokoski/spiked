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
      Moips
    </div>
  );
}

export default EventView;
