import React from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggle extends React.Component {
  state = {
    visibility: false
  };

  onHandleVisibilityToggle = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }));
  };

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.onHandleVisibilityToggle}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Hey. These are some details you can see now!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));