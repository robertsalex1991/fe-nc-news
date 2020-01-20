import React from "react";
import { Link } from "@reach/router";

const ArticleList = props => {
  const { articles } = props;
  return (
    <div>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.article_id} className="articleCard">
              <Link to={`/articles/${article.article_id}`}>
                {" "}
                <h2>{article.title}</h2>
              </Link>
              <p>Likes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
              <p>Date Posted: {article.created_at.slice(0, 10)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
