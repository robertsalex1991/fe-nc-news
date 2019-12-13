import React from "react";
import { Link } from "@reach/router";

function ArticlesList(props) {
  return (
    <div>
      <ul>
        {props.articles.map(article => {
          return (
            <li key={article.article_id} className="articleList">
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
