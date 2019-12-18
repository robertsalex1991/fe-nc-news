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
    const { articleId, signedInUser, updateComments } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    postComment(articleId, commentInput, signedInUser).then(comment => {
      this.setState({ commentInput: "" });
      updateComments(comment.data.comment);
    });
  };

  render() {
    const { commentInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="addComment">
          {" "}
          add Comment
          <input
            value={commentInput}
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


