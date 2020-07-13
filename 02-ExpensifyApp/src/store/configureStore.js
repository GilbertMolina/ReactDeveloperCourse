import { createStore, combineReducers } from 'redux';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    // The next line if useful for using the Redux tools in Chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};