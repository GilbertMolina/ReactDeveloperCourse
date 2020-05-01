import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  onHandleAddOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  onHandleMinusOne = () => {
    if (this.state.count !== 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  onHandleReset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({
        count
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onHandleAddOne}>+1</button>
        <button onClick={this.onHandleMinusOne}>-1</button>
        <button onClick={this.onHandleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));