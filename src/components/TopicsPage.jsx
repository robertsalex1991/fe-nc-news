import React, { Component } from "react";
import { getTopics } from "../API";
import { Link } from "@reach/router";

class TopicsPage extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {topics.map(topic => {
            return (
              <li key={topic.slug} className="topicList">
                <Link to={`/topics/${topic.slug}`}> {topic.slug} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchTopics = () => {
    getTopics().then(topicsData => {
      this.setState({ topics: topicsData, isLoading: false });
    });
  };
}

export default TopicsPage;
