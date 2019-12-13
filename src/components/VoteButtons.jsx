import React, { Component } from "react";

export default class VoteButtons extends Component {
  state = {
    voteDifference: 0
  };
  handleVote = votes => {
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + votes
      };
    });
    this.props.sendVotes(this.props.thing_id, votes);
  };

  render() {
    return (
      <div>
        <p>likes: {this.props.votes + this.state.voteDifference}</p>
        <button
          onClick={() => {
            this.handleVote(1);
          }}
        >
          {" "}
          Votes Up{" "}
        </button>
        <button
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          Votes Down
        </button>
      </div>
    );
  }
}
