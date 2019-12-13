import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class TopicsButtons extends Component {
  state = {
    topics: []
  };

  getTopics = () => {
    axios
      .get("https://be-nc-news-ar.herokuapp.com/api/topics")
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="topicBar">
        <ul className="topicBar">
          <label>Filter by Topic: </label>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}> | {topic.slug} | </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TopicsButtons;
