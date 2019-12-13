import React, { Component } from "react";

class OptimisticComments extends Component {
  state = {
    commentContents: ""
  };

  fetchOptimisticComment = (commentSubmission) => {
      this.setState({commentContents: commentSubmission })
  }

  componentDidMount() {
    this.fetchOptimisticComment();
  }

  render() {
    return <div>

    </div>;
  }
}

export default OptimisticComments;
