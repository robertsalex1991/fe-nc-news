import React from "react";

function DeleteButton(props) {
  const {
    deleteFunc,
    renderFunc,
    item_id,
    signedInUser,
    author,
    deleteMsg
  } = props;

  const handleSubmit = event => {
    event.preventDefault();

    renderFunc(item_id);
    deleteFunc(item_id);
  };
  if (signedInUser === author) {
    return (
      <div>
        <button onClick={handleSubmit}>{deleteMsg}</button>
      </div>
    );
  }

  return <div></div>;
}

export default DeleteButton;
