import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import { Router } from "@reach/router";
import ArticlePage from "./components/ArticlePage";
import TopicsPage from "./components/TopicsPage";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  state = {
    signedInUser: "tickle122" //until we can add and sign in new users then this is just taken from the db//
  };

  render() {
    const { signedInUser } = this.state;
    return (
      <div className="App">
        <Header changeUser={this.changeUser} signedInUser={signedInUser} />
        <Router>
          <AllArticles path="/" />
          <AllArticles path="/articles/" />
          <AllArticles path="/topics/:topic" />
          <ArticlePage signedInUser={signedInUser} path="/articles/:id" />
          <TopicsPage path="/topics" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }

  changeUser = username => {
    this.setState({ signedInUser: username });
  };
}

export default App;
