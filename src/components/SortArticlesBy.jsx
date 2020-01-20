import React from "react";

const SortArticlesBy = props => {
  const handleSubmit = event => {
    const { value } = event.target;
    props.getOrder(value);
  };

  return (
    <form className="sortArticles">
      <select name="sort_by" id="sort_by" onChange={handleSubmit}>
        <option value="created_at">Most Recent</option>
        <option value="comment_count">Most Commented</option>
        <option value="votes">Most Liked</option>
      </select>
    </form>
  );
};

export default SortArticlesBy;
