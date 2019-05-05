import React, { Component, Fragment } from 'react';
import GlobalStyles from './components/styled_components/GlobalStyles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <h1>Hello World</h1>
      </Fragment>
    );
  }
}

export default App;
