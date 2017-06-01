import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import Thing from 'components/Thing/Thing';
import classes from './Things.scss';

export default (props) => (
  <div className={classes.things}>
    {props.things.map((thing, i) => {
      return <Thing
        index={i}
        key={i}
        { ...thing }
      />
    })}
    <Waypoint
      topOffset={200}
      onEnter={props.handleWaypointEnter}
    />
  </div>
);