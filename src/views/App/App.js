import React, { PropTypes } from 'react';
import 'assets/styles/main.scss';
import ThingsContainer from 'components/ThingsContainer/ThingsContainer';
import Things from 'components/Things/Things';

const App = ({ children }) => (
  <div>
    <h1 id="logo">Wall of Things</h1>
    <ThingsContainer>
      <Things />
    </ThingsContainer>
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
