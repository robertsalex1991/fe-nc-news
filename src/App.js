import React from "react";
import "./styling/App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import ArticlePage from "./components/ArticlePage";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    signedInUser: "tickle122" //until we can add and sign in new users then this is just taken from the db//
  };

  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <NavBar signedInUser={this.state.signedInUser} />

        <Router>
          <AllArticles path={"/"} />
          <AllArticles path="/topics/:topic" />
          <AllArticles path="/articles/" />
          <ArticlePage
            signedInUser={this.state.signedInUser}
            path="/articles/:id"
          />
        </Router>
      </div>
    );
  }
}

export default App;
