import React, { Component } from "react";
import SortByButton from "./SortByButton";
import { getArticles } from "../API";
import ArticlesList from "./ArticlesList";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: ""
  };

  fetchArticles = () => {
    getArticles(this.props.topic, this.state.sortBy).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
    if (prevState.sortBy !== this.state.sortBy) {
      this.fetchArticles();
    }
  }

  componentDidMount() {
    this.fetchArticles();
  }

  getOrder = event => {
    this.setState({ sortBy: event });
  };

  render() {
    const { articles } = this.state;
    const { isLoading } = this.state;
    if (isLoading) return <p className="loadingBar">...Loading Articles</p>;
    return (
      <main>
        <h1>Articles</h1>
        <SortByButton getOrder={this.getOrder} />
        <ArticlesList articles={articles} />
      </main>
    );
  }
}

export default AllArticles;
