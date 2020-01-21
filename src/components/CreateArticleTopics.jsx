import React, { Component } from "react";
import { getTopics } from "../API";

class CreateArticleTopics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { handleTopicChange } = this.props;
    const { topics } = this.state;
    return (
      <label>
        {" "}
        Select Topic:{" "}
        <select
          className="articleTopicSelect"
          name="Topic"
          id="topic"
          onChange={handleTopicChange}
        >
          <option selected disabled hidden>
            Select
          </option>
          {topics.map(topic => {
            const { slug } = topic;
            return (
              <option key={slug} value={slug}>
                {slug}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  fetchTopics = () => {
    getTopics().then(topicsData => {
      this.setState({ topics: topicsData, isLoading: false });
    });
  };
}

export default CreateArticleTopics;
