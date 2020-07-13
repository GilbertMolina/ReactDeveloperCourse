import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{parseFloat(amount, 10) / 100} - {moment(createdAt).format('LL')}</p>
  </div>
);

export default ExpenseListItem;
