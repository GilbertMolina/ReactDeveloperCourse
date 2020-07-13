import { v4 as uuidv4 } from 'uuid';
import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from "../actionsTypes/expenses";

// ADD_EXPENSE
export const addExpense = ({ 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// DELETE_EXPENSE
export const deleteExpense = ({ id } = {}) => ({
  type: DELETE_EXPENSE,
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});