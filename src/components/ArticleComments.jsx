import React, { Component } from "react";
import { getArticleComments, commentVote, deleteComment } from "../API";
import CommentForm from "./CommentForm";
import VoteButtons from "./VoteButtons";
import DeleteButton from "./DeleteButton";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments, isLoading } = this.state;
    const { article_id, signedInUser } = this.props;

    if (isLoading) return <p>Loading comments...</p>;
    return (
      <div>
        <div>
        <CommentForm
          updateComments={this.updateComments}
          signedInUser={signedInUser}
          article_id={article_id}
        />
        </div>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} className="commentCard">
                <p className="commentAuthor">{comment.author}</p>
                <p className="commentBody"> {comment.body}</p>
                <VoteButtons
                  votes={comment.votes}
                  target_id={comment.comment_id}
                  sendVotes={commentVote}
                  signedInUser={signedInUser}
                  author={comment.author}
                />
                <DeleteButton
                  author={comment.author}
                  signedInUser={signedInUser}
                  item_id={comment.comment_id}
                  renderFunc={this.removeComment}
                  deleteFunc={deleteComment}
                  deleteMsg="Delete Comment"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getArticleComments(article_id).then(articleComments => {
      this.setState({ comments: articleComments, isLoading: false });
    });
  };

  updateComments = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  removeComment = comment_id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(
          comment => comment.comment_id !== comment_id
        )
      };
    });
  };
}

export default ArticleComments;
