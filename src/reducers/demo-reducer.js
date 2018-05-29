/*eslint-disable no-console*/
import * as types from '../actions/action-types';
import initialState from './initial-states';


const demoReducer = (state = initialState.demo(), action) => {
  switch (action.type) {
    case types.ON_ADD_DEMO_FORM_CHANGE: {
      const newState = Object.assign({}, state);
      newState[action.data.field] = action.data.value;
      return newState;
    }
    case types.ON_SUBMIT_DEMO_SUCCESS: {
      const newState = Object.assign({}, state);
      console.log('inside submit demo reduer', action);
      newState.id = action.data.data.demoId;
      newState.created = action.data.data.created;
      return newState;
    }
    case types.SET_COPY: {
      const newState = Object.assign({}, state);
      newState.copied = true;
      return newState;
    }
    default:
      return state;
  }
}

export default demoReducer;
