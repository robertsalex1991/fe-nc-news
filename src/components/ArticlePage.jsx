import React, { Component } from "react";
import ArticleComments from "./ArticleComments";
import VoteButtons from "./VoteButtons";
import ViewToggler from "./ViewToggler";
import ErrNotFound from "./ErrNotFound";
import { getArticle, articleVote } from "../API";

class ArticlePage extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null
  };

  fetchArticle = () => {
    getArticle(this.props.id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const { article, isLoading, err } = this.state;
    if (err) return <ErrNotFound />;
    if (isLoading) return <p className="loadingBar">...Loading Articles</p>;
    return (
      <div>
        <h1>{article.title}:</h1>
        <h2>{article.body}</h2>
        <h2> written by {article.author}</h2>
        <VoteButtons
          thing_id={article.article_id}
          votes={article.votes}
          sendVotes={articleVote}
        />
        <ViewToggler>
          <ArticleComments
            signedInUser={this.props.signedInUser}
            articleId={article.article_id}
          />
        </ViewToggler>
      </div>
    );
  }
}

export default ArticlePage;
