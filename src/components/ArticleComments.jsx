import React, { Component } from "react";
import { getComments, commentVote } from "../API";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";
import VoteButtons from "./VoteButtons";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  fetchComments = () => {
    const { articleId } = this.props;
    getComments(articleId).then(comments => {
      this.setState({ comments: comments, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchComments();
  }

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

  render() {
    const { comments, isLoading } = this.state;
    const { signedInUser, articleId } = this.props;
    if (isLoading) return <p className="loadingBar">...Loading Comments</p>;
    return (
      <div>
        <CommentForm
          signedInUser={signedInUser}
          articleId={articleId}
          updateComments={this.updateComments}
        />
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} className="comment">
                <p className="commentAuthor">{comment.author}</p>
                <p className="commentBody"> {comment.body}</p>
                <VoteButtons
                  thing_id={comment.comment_id}
                  votes={comment.votes}
                  sendVotes={commentVote}
                />
                <DeleteComment
                  removeComment={this.removeComment}
                  comment_id={comment.comment_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleComments;
