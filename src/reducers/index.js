import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user-reducer';
import toasts from './toastr-reducer';
import demo from './demo-reducer';
import nav from './nav-reducer';
import demos from './demos-reducer';
const rootReducer = combineReducers({
  nav,
  demos,
  demo,
  user,
  toasts,
  routing: routerReducer
});

export default rootReducer;
