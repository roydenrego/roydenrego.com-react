import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Removed from './scenes/Removed';

ReactGA.initialize('UA-129690403-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <Removed />
    );
  }
}

export default App;
