import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    onDisplay: false
  };

  toggleDisplay = () => {
    this.setState(currentState => {
      return { onDisplay: !currentState.onDisplay };
    });
  };

  render() {
    const { onDisplay } = this.state;
    const { children, hideMessage, showMessage } = this.props;
    return (
      <div>
        <button onClick={this.toggleDisplay} className="positiveButtons">
          {onDisplay ? `${hideMessage}` : `${showMessage}`}
        </button>
        {onDisplay && children}
      </div>
    );
  }
}

export default ViewToggler;
