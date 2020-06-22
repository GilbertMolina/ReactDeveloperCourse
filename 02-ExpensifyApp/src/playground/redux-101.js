import { createStore } from 'redux';

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const SET = 'SET';

// Initial State
const initialState = {
  count: 0
}

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: INCREMENT,
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: DECREMENT,
  decrementBy
});

const resetCount = () => ({
  type: RESET
});

const setCount = ({ count = 1 } = {}) => ({
  type: SET,
  count
});

// Reducers
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      return {
        count: state.count + action.incrementBy
      };
      case DECREMENT:
        return {
          count: state.count - action.decrementBy
        };
    case RESET:
      return {
        count: 0
      };
      case SET:
        return {
          count: action.count
        };
    default:
      return state;
  }
};

// Store
const store = createStore(countReducer);

store.subscribe(() => {
  console.log('Store', store.getState())
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
