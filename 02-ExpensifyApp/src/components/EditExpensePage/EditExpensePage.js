import React from 'react';

const EditExpensePage = (props) => (
  <div>
    <h1>This page is for editing the expense with the id {props.match.params.id}</h1>
  </div>
);

export default EditExpensePage;