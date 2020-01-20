import axios from "axios";

const baseURL = "https://be-nc-news-ar.herokuapp.com/api";

export const getArticles = (topic, sortBy, limit, p) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sortBy,
        limit: limit,
        p: p
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getOneArticle = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data }) => {
    return data.users;
  });
};

export const postComment = (article_id, comment, user) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, {
    username: user,
    body: comment
  });
};

export const deleteComment = comment_id => {
  axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const commentVote = (comment_id, votes) => {
  axios.patch(`${baseURL}/comments/${comment_id}`, {
    inc_votes: votes
  });
};

export const articleVote = (article_id, votes) => {
  axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: votes
  });
};
