import React, { Component } from "react";
import { getTopics } from "../API";
import { Link } from "@reach/router";

class TopicsButtons extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics: topics, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div>
        <ul className="topicBar">
          <label className="navButton">Filter by Topic: </label>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link className="navButton " to={`/topics/${topic.slug}`}>
                  {" "}
                  {topic.slug}{" "}
                </Link>
              </li>
            );
          })}
          <li key="allTopics">
            {" "}
            <Link to="/topics" className="navButton">
              See All Topics{" "}
            </Link>
          </li>{" "}
        </ul>
      </div>
    );
  }
}

export default TopicsButtons;
