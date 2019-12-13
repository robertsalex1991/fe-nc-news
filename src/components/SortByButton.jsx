import React from "react";

const SortByButton = props => {
  let handleSubmit = event => {
    props.getOrder(event.target.value);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">Sort Articles By: </label>
        <select name="sort_by" id="sort_by" onChange={handleSubmit}>
          <option value="created_at">Most Recent</option>
          <option value="comment_count">Most Commented</option>
          <option value="votes">Most Liked</option>
        </select>
      </form>
    </div>
  );
};

export default SortByButton;
