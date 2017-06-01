import React, { PropTypes } from 'react';
import classes from './Thing.scss';

export default (props) => {
  let image = require(`assets/images/${props.image}`);
  let styles = {
    backgroundImage: `url(${image})`
  };
  return (
    <div className={classes.thing}>
      <a href="#" className={classes.thingLink} style={styles} alt=""></a>
    </div>
  );
};