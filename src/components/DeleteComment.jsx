import React from "react";
import { deleteComment } from "../API";

function DeleteComment(props) {
  const { removeComment, comment_id, signedInUser, author } = props;

  const handleSubmit = event => {
    event.preventDefault();

    removeComment(comment_id);
    deleteComment(comment_id);
  };
  if (signedInUser === author) {
    return (
      <div>
        <button onClick={handleSubmit}>Delete Comment</button>
      </div>
    );
  }

  return <div></div>;
}

export default DeleteComment;
