import React from "react";

function ChangePage(props) {
  const { page, maxPage } = props;

  const handleChange = pageChange => {
    const { updatePage } = props;
    updatePage(pageChange);
  };
  return (
    <div>
      <button
        className="voteButtons"
        disabled={page === maxPage}
        onClick={() => {
          handleChange(1);
        }}
      >
        Next Page
      </button>
      <p>page: {page} </p>
      <button
        className="voteButtons"
        disabled={page <= 1}
        onClick={() => {
          handleChange(-1);
        }}
      >
        back one page
      </button>
    </div>
  );
}

export default ChangePage;
