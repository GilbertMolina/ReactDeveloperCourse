import React from 'react';
import { AddOption, Options, Action, Header } from '..'

class Indecision extends React.Component {
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const generateRandomNumber = (x) => Math.floor(Math.random() * x);

    const randomNumber = generateRandomNumber(this.state.options.length);
    const option = this.state.options[randomNumber];

    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options
        }))
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div>
        <Header
          subtitle="Put your life in the hands of a Computer"
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

Indecision.defaultProps = {
  options: []
}

export default Indecision;