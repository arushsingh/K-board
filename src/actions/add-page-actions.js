// import * as types from './action-types';
import { push } from 'react-router-redux';

export const go_to_target_page = (target) => {
  return (dispatch) => {
    // console.log('inside dispatch');
    return dispatch(push(`/add-${target}`));
  }
}
