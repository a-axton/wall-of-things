import React, { PropTypes } from 'react';

export default class ThingsContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      loading: true,
      things: [{},{},{}]
    };
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
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { ...this.state });
        })}
      </div>
    )
  }
}