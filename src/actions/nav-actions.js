import * as types from './action-types';

export { toggle_user_menu, toggle_sidebar };

function toggle_user_menu() {
  return { type: types.TOGGLE_NAV_USER_MENU }
}

function toggle_sidebar() {
  return { type: types.TOGGLE_NAV_SIDEBAR };
}


