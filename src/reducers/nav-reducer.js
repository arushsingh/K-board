import * as types from '../actions/action-types';
import initialState from './initial-states';

const navReducer = (state = initialState.nav(), action) => {
  switch (action.type) {
    case types.TOGGLE_NAV_USER_MENU: {
      const newState = Object.assign({}, state);
      newState.userToggleState = !newState.userToggleState;
      return newState;
    }
    case types.TOGGLE_NAV_SIDEBAR: {
      const newState = Object.assign({}, state);
      newState.sidebarToggleState = !newState.sidebarToggleState;
      return newState;
    }
    default: {
      return state
    }
  }
}

export default navReducer;
