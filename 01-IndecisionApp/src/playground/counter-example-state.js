class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          count: 0  
        };

        this.onHandleAddOne = this.onHandleAddOne.bind(this);
        this.onHandleMinusOne = this.onHandleMinusOne.bind(this);
        this.onHandleReset = this.onHandleReset.bind(this);
    }

    onHandleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    onHandleMinusOne() {
        if (this.state.count !== 0){
            this.setState((prevState) => {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }

    onHandleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onHandleAddOne}>+1</button>
                <button onClick={this.onHandleMinusOne}>-1</button>
                <button onClick={this.onHandleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));