import React, { Component, Fragment } from 'react';
import './App.css';
import SearchAppBar from "./components/SearchAppBar";
import CenteredGrid from "./components/CenteredGrid";


class App extends Component {
  render() {
    return (
      <Fragment>
        <SearchAppBar />
        <CenteredGrid />
      </Fragment>
    );
  }
}

export default App;
