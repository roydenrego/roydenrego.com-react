import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Home from './scenes/Home';

ReactGA.initialize('UA-129690403-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
