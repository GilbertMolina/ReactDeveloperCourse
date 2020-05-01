import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error: error ? error : undefined
    }));

    if (!error) {
      e.target.elements.option.value = ''
    }
  };

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

export default AddOption;