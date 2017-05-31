import React, { PropTypes } from 'react';

export default () => {
  let styles = {
    background: 'url(//lorempixel.com/640/480)'
  };
  return (
    <li className='thing'>
      <a href="#" className="thing-link" style={styles} alt=""></a>
    </li>
  );
};