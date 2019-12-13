import React, { Component } from "react";
import { postComment } from "../API";

class CommentForm extends Component {
  state = {
    commentInput: ""
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    postComment(
      this.props.articleId,
      this.state.commentInput,
      this.props.signedInUser,
      this.setState({ commentInput: "" })
    ).then(comment => {
      this.props.updateComments(comment.data.comment);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="addComment">
          {" "}
          add Comment
          <input
            value={this.state.commentInput}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <button>submit</button>
      </form>
    );
  }
}

export default CommentForm;
