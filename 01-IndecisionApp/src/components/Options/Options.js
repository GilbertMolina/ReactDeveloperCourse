import React from 'react';
import { Option } from '..';

const Options = (props) => (
  <div>
    <button
      onClick={props.handleDeleteOptions}
      disabled={!props.hasOptions}
    >Remove All</button>
    {props.options.length <= 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((x) => (
        <Option
          key={x}
          optionText={x}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;