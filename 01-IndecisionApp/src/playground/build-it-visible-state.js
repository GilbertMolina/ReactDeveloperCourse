class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };

    this.onHandleVisibilityToggle = this.onHandleVisibilityToggle.bind(this);
  }

  onHandleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

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
