import React, { Component } from "react";

class VoteButtons extends Component {
  state = {
    voteDifference: 0
  };

  render() {
    const { voteDifference } = this.state;
    const { votes, signedInUser, author } = this.props;
    if (signedInUser === author) return <p>likes: {votes + voteDifference} </p>;
    return (
      <div>
        <p>likes: {votes + voteDifference} </p>
        <button
          className="voteButtons"
          disabled={voteDifference === 1}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          Votes up
        </button>
        <button
          className="voteButtons"
          disabled={voteDifference === -1}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          Votes down
        </button>
      </div>
    );
  }

  handleVote = votes => {
    const { sendVotes, target_id } = this.props;
    this.setState(currentState => {
      return { voteDifference: currentState.voteDifference + votes };
    });
    sendVotes(target_id, votes);
  };
}

export default VoteButtons;
