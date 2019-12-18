import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    displayThing: false
  };
  render() {
    const { displayThing } = this.state;
    const { children } = this.props
    return (
      <div>
        <button className="toggler" onClick={this.toggleDisplay}>
          {displayThing ? "Hide Comments" : "Show Comments"}
        </button>
        {displayThing && children}
      </div>
    );
  }

  toggleDisplay = () => {
    this.setState(currentState => {
      return { displayThing: !currentState.displayThing };
    });
  };
}

export default ViewToggler;
