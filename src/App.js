import React, { Component, Fragment } from 'react';
import './App.css';
import Layout from "./components/Layout";
import NewsList from "./containers/NewsList";
import NewsContent from "./components/NewsContent";
import TopBarWithSearch from "./containers/TopBarWithSearch";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout
          top={<TopBarWithSearch />}
          left={<NewsList />}
          center={<NewsContent />}
        />
      </Fragment>
    );
  }
}

export default App;
