import React from "react";
import { deleteComment } from "../API";

function DeleteComment(props) {
  const handleSubmit = event => {
    event.preventDefault();
    props.removeComment(props.comment_id);
    deleteComment(props.comment_id);
  };
  return (
    <div>
      <button onClick={handleSubmit}>Delete Comment</button>
    </div>
  );
}

export default DeleteComment;
