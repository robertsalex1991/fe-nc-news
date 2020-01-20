import React, { Component } from "react";
import { getOneArticle, articleVote } from "../API";
import ArticleComments from "./ArticleComments";
import ViewToggler from "./ViewToggler";
import VoteButtons from "./VoteButtons";
import ErrorPage from "./ErrorPage";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { id } = this.props;
    this.fetchOneArticle(id);
  }

  render() {
    const { article, isLoading, err } = this.state;
    const { signedInUser } = this.props;

    if (err) return <ErrorPage {...err} />;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Written By: {article.author}</p>
        <VoteButtons
          votes={article.votes}
          target_id={article.article_id}
          sendVotes={articleVote}
        />
        <p>Date Posted: {article.created_at.slice(0, 10)}</p>
        <ViewToggler hideMessage="hideComments" showMessage="showComments">
          <ArticleComments
            signedInUser={signedInUser}
            article_id={article.article_id}
          />
        </ViewToggler>
      </div>
    );
  }

  fetchOneArticle = id => {
    getOneArticle(id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(({response}) => {
        console.dir(response.data);
        this.setState({ err: response });
      });
  }
  
}


export default ArticlePage;
