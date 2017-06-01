import React, { PropTypes } from 'react';

export default class ThingsContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      loading: true,
      thingsToLoad: 16,
      things: []
    };
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  handleWaypointEnter () {
    this.setState({
      thingsToLoad: this.state.thingsToLoad + 4
    })
  }

  componentWillMount () {
    fetch(require('assets/data/things.json'))
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          things: res,
          loading: false
        })
      })
  }

  render () {
    let things = this.state.things.slice(0, this.state.thingsToLoad);
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            things,
            handleWaypointEnter: this.handleWaypointEnter
          });
        })}
      </div>
    )
  }
}