import React from 'react';
import { Option } from '..';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Clear options</button>
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
};

export default Options;