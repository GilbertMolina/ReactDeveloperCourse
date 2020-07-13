import React from 'react';
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;