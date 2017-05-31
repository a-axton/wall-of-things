import React, { PropTypes } from 'react';
import Thing from 'components/Thing/Thing';

export default ({ things }) => (
  <ul className='things'>{things.map((thing) => (<Thing { ...thing } />))}</ul>
);