import React, { Component } from "react";
import { getArticles } from "../API";
import ArticleList from "./ArticleList";
import SortArticlesBy from "./SortArticlesBy";
import ErrorPage from "./ErrorPage";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    limit: 10,
    p: 1,
    sortBy: ""
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, p } = this.state;

    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
    if (prevState.sortBy !== sortBy || prevState.p !== p) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading, err } = this.state;

    if (isLoading) return <p className="loadingBar">Loading...</p>;
    if (err) return <ErrorPage />;

    return (
      <div>
        <h1 className="articleHeader">Articles</h1>
        <SortArticlesBy getOrder={this.getOrder} />
        <ArticleList articles={articles} />
      </div>
    );
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { sortBy } = this.state;
    getArticles(topic, sortBy).then(articleData => {
      this.setState({ articles: articleData, isLoading: false });
    });
  };

  getOrder = event => {
    this.setState({ sortBy: event });
  };
}

export default AllArticles;
