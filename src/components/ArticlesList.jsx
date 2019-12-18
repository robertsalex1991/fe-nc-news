import React from "react";
import { Link } from "@reach/router";

function ArticlesList(props) {
  const { articles } = props;
  return (
    <div>
      <ul>
        {articles.map(article => {
          return (
            <div>
            <li key={article.article_id} className="articleList">
              <Link
                className="articleTitle"
                to={`/articles/${article.article_id}`}
              >
                {article.title}
              </Link>
              <p>Date Published: {article.created_at.slice(0, 10)}</p>
              <p>Comments: {article.comment_count}</p>
              <p>Likes: {article.votes}</p>
            </li>
             <br/>
             </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
