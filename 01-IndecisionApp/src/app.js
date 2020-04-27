class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      options: ['Item 1', 'Item 2', 'Item 3']
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const getRandomNumber = (x) => Math.floor(Math.random() * x);

    const randomNumber = getRandomNumber(this.state.options.length);
    const option = this.state.options[randomNumber];

    alert(option);
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      }
    });
  }
  
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a Computer";

    return (
      <div>
        <Header 
          title={title} 
          subtitle={subtitle}
        />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick} 
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Clear options</button>
        <p>
          {
            this.props.options.length > 0
            ? `Here are your ${this.props.options.length} options:`
            : "No options"
          }
        </p>
        {
          this.props.options.map((x) => (
            <Option key={x} optionText={x} />
          ))
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.optionText}</li>
      </ul>
    );
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: undefined
    }

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error ? error : undefined
      };
    });

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onHandleSubmit}>
          <label>New option: </label>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));