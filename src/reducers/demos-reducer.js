import * as types from '../actions/action-types';
import initialState from './initial-states';

const demoReducer = (state = initialState.demos, action) => {
  switch (action.type) {
    case types.ADD_DEMO: {
      let newState = [...state];
      newState = [action.data, ...newState];
      return newState;
    }
    default:
      return state
  }
}
export default demoReducer;