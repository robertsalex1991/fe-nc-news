import React, { Component } from "react";
import { getArticles } from "../API";
import ArticleList from "./ArticleList";
import SortArticlesBy from "./SortArticlesBy";
import ErrorPage from "./ErrorPage";
import ChangePage from "./ChangePage";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    limit: 5,
    maxPage: 0,
    p: 1,
    sortBy: "created_at",
    articleCount: 0
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, p } = this.state;

    if (prevProps.topic !== topic) {
      this.fetchArticles();
      this.setState({ p: 1 });
    }
    if (prevState.sortBy !== sortBy || prevState.p !== p) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading, err, p, maxPage } = this.state;

    if (isLoading) return <p className="loadingBar">Loading...</p>;
    if (err) return <ErrorPage />;
    return (
      <div>
        <h1 className="articleHeader">Articles</h1>
        <SortArticlesBy getOrder={this.getOrder} />
        <ArticleList articles={articles} />
        <ChangePage updatePage={this.updatePage} maxPage={maxPage} page={p} />
      </div>
    );
  }

  updatePage = page => {
    this.setState(currentState => {
      return { p: currentState.p + page };
    });
  };

  fetchArticles = () => {
    const { topic } = this.props;
    const { sortBy, limit, p } = this.state;
    getArticles(topic, sortBy, limit, p).then(articleData => {
      const { articles, article_count } = articleData;
      const maxPage = Math.ceil(article_count / limit);
      this.setState({
        articles: articles,
        isLoading: false,
        articleCount: article_count,
        maxPage: maxPage
      });
    });
  };

  getOrder = event => {
    this.setState({ sortBy: event });
  };
}

export default AllArticles;
