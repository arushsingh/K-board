import * as types from '../actions/action-types';
import initialState from './initial-states';
import lsService from '../services/ls-service';
import * as config from '../consts/app-config';

const ls = lsService();

const authReducer = (state = initialState.userModel(), action) => {
  switch (action.type) {
    case types.SET_LOGIN_STATE: {
      const newState = Object.assign({}, state);
      newState.isLoggedIn = action.data.isLoggedIn;
      newState.token = action.data.token;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = Object.assign({}, state);
      if (action.data.token) {
        ls.set(config.TOKEN_NAME, action.data.token);
        newState.isLoggedIn = true;
        newState.token = action.data.token;
      }
      return newState;
    }

    case types.ON_CHANGE_LOGIN_FORM: {
      const newState = Object.assign({}, state);
      newState[action.data.field] = action.data.value;
      return newState;
    }
    case types.LOGOUT_SUCCESS: {
      const newState = Object.assign({}, state);
      ls.remove(config.TOKEN_NAME);
      newState.isLoggedIn = false;
      newState.email = '';
      newState.display_name = '';
      newState.token = undefined;
      return newState
    }
    default:
      return state;
  }
}

export default authReducer;
