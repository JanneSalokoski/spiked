// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'

import './Template.scss';

import { LogicContext } from '../LogicContext/LogicContext';

interface TemplatePropsInterface {
  [key: string]: any;
}

function Template (props: TemplatePropsInterface) {
  const [logicState, logicDispatch] = useContext(LogicContext);

  return (
    <div className='Template'>

    </div>
  );
}

export default Template;
