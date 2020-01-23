import React, { Component } from "react";
import { postComment } from "../API";

class CommentForm extends Component {
  state = {
    commentInput: ""
  };

  render() {
    const { commentInput } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">
          add comment:{" "}
          <input
            value={commentInput}
            onChange={this.handleChange}
            type="text"
          ></input>
          <button type="submit" className='positiveButtons'>Submit</button>
        </label>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ commentInput: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, signedInUser, updateComments } = this.props;
    const { commentInput } = this.state;
    postComment(article_id, commentInput, signedInUser).then(({ data }) => {
      this.setState({ commentInput: "" });
      updateComments(data.comment);
    });
  };
}

export default CommentForm;
