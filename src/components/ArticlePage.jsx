import React, { Component } from "react";
import { getOneArticle, articleVote, deleteArticle } from "../API";
import ArticleComments from "./ArticleComments";
import ViewToggler from "./ViewToggler";
import VoteButtons from "./VoteButtons";
import ErrorPage from "./ErrorPage";
import DeleteButton from "./DeleteButton";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
    articleDeleted: false
  };

  componentDidMount() {
    const { id } = this.props;
    this.fetchOneArticle(id);
  }

  render() {
    const { article, isLoading, err, articleDeleted } = this.state;
    const { signedInUser } = this.props;
    const { title, body, author, votes, article_id, created_at } = article;

    if (err) return <ErrorPage {...err} />;
    if (isLoading) return <p>Loading...</p>;
    if (articleDeleted) return <h1>This article has been deleted</h1>;
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>Written By: {author}</p>
        <VoteButtons
          votes={votes}
          target_id={article_id}
          sendVotes={articleVote}
          signedInUser={signedInUser}
          author={author}
        />
        <DeleteButton
          author={author}
          signedInUser={signedInUser}
          item_id={article_id}
          renderFunc={this.removeArticle}
          deleteFunc={deleteArticle}
          deleteMsg="Delete Article"
        />
        <p>Date Posted: {created_at.slice(0, 10)}</p>

        <ViewToggler hideMessage="hideComments" showMessage="showComments">
          <ArticleComments
            signedInUser={signedInUser}
            article_id={article.article_id}
          />
        </ViewToggler>
      </div>
    );
  }

  removeArticle = () => {
    this.setState({ articleDeleted: true });
  };

  fetchOneArticle = id => {
    getOneArticle(id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(({ response }) => {
        console.dir(response.data);
        this.setState({ err: response });
      });
  };
}

export default ArticlePage;
