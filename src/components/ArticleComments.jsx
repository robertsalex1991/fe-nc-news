import React, { Component } from "react";
import { getArticleComments, commentVote } from "../API";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";
import VoteButtons from "./VoteButtons";

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
        <CommentForm
          updateComments={this.updateComments}
          signedInUser={signedInUser}
          article_id={article_id}
        />
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} className="comment">
                <p className="commentAuthor">{comment.author}</p>
                <p className="commentBody"> {comment.body}</p>
                <VoteButtons
                  votes={comment.votes}
                  target_id={comment.comment_id}
                  sendVotes={commentVote}
                />
                <DeleteComment
                  signedInUser={signedInUser}
                  removeComment={this.removeComment}
                  comment_id={comment.comment_id}
                  author={comment.author}
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
