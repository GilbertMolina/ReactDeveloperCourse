import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from "../actionsTypes/expenses";

// Expenses default state
const expensesReducerDefaultState = [];

// Expenses Reducer
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ]
    case DELETE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id !== action.id){
          return expense;
        }

        return {
          ...expense,
          ...action.updates
        };
      });
    default:
      return state;
  }
};