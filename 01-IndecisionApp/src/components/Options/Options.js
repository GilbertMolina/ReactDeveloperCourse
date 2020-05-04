import React from 'react';
import { Option } from '..';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length <= 0 && <p className="widget__message">Please add an option to get started!</p>}
    {
      props.options.map((x, i) => (
        <Option
          key={x}
          optionText={x}
          count={i + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;