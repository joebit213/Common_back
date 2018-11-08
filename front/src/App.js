import React, { Component } from 'react';
import Routes from './Routes';
import {withRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);