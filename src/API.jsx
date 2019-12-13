import axios from "axios";

const baseURL = "https://be-nc-news-ar.herokuapp.com/api";

export const getArticles = (topic, sortBy) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sortBy
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = articleId => {
  return axios
    .get(`${baseURL}/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = (articleId, comment, user) => {
  return axios.post(`${baseURL}/articles/${articleId}/comments`, {
    username: user,
    body: comment
  });
};

export const deleteComment = comment_id => {
  axios.delete(`${baseURL}/comments/${comment_id}`).then(() => {});
};

export const commentVote = (comment_id, votes) => {
  axios
    .patch(`${baseURL}/comments/${comment_id}`, {
      inc_votes: votes
    })
    .then(() => {});
};

export const articleVote = (article_id, votes) => {
  axios
    .patch(`${baseURL}/articles/${article_id}`, {
      inc_votes: votes
    })
    .then(() => {});
};
