import React, { Component } from "react";
import { postArticle } from "../API";
import CreateArticleTopics from "./CreateArticleTopics";

class AddArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { title, body, isLoading } = this.state;
    if (isLoading) return <p>...Loading</p>;

    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Title:{" "}
            <input
              value={title}
              onChange={this.handleTitleChange}
              type="text"
            ></input>
          </label>
          <label>
            Article:{" "}
            <input
              value={body}
              onChange={this.handleBodyChange}
              type="text"
            ></input>
          </label>
          <CreateArticleTopics handleTopicChange={this.handleTopicChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { signedInUser } = this.props;
    const { title, body, topic } = this.state;

    postArticle(title, body, topic, signedInUser).then(({ data }) => {
      this.setState({ title: "", body: "", slug: "" });
    });
  };

  //need to make handle changes into one generalised function, not sure if I can add placeholder parameter next to event in the function

  handleTitleChange = event => {
    const { value } = event.target;
    this.setState({ title: value });
  };

  handleBodyChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleTopicChange = event => {
    const { value } = event.target;
    this.setState({ topic: value });
  };
}

export default AddArticle;
