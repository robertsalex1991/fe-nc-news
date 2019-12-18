import React, { Component } from "react";

export default class VoteButtons extends Component {
  state = {
    voteDifference: 0
  };

  const;
  handleVote = votes => {
    const { sendVotes, thing_id } = this.props;
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + votes
      };
    });
    sendVotes(thing_id, votes);
  };

  render() {
    const { voteDifference } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <p>likes: {votes + voteDifference}</p>
        <button
          className="voteButtons"
          disabled={voteDifference === 1}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          {" "}
          Votes Up{" "}
        </button>
        <button
          className="voteButtons"
          disabled={voteDifference === -1}
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
