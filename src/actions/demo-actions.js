import * as types from './action-types';
import apiService from '../api';
import * as toastActions from './toastr-actions';
import { push } from 'react-router-redux';

const api = apiService();

export {
  on_add_demo_form_change,
  add_demo_success,
  add_demo_success_route,
  on_add_demo_form_submit,
  set_copy
}

function on_add_demo_form_change(data) {
  return { type: types.ON_ADD_DEMO_FORM_CHANGE, data };
}

function add_demo_success(data) {
  return (dispatch, getState) => {
    const { demo } = getState();
    const newDemo = { ...demo, id: data.demoId, created: data.created }
    dispatch({ type: types.ON_SUBMIT_DEMO_SUCCESS, data });
    dispatch({ type: types.ADD_DEMO, data: newDemo });
    return dispatch(add_demo_success_route());
  }
}

function add_demo_success_route() {
  return (dispatch, getState) => {
    const { user } = getState();
    const token = user.token;
    if (!token) {
      return dispatch(toastActions.pop_toast({ status: false, msg: 'Login first' }));
    }
    return dispatch(push('/demo'));
  }
}

function on_add_demo_form_submit(data) {
  return (dispatch) => {
    api.post('/demo', data).then((response) => {
      if (!response.status) {
        return dispatch(toastActions.pop_toast({ status: false, msg: response.msg }));
      }
      console.log('add demo response', response.msg);
      dispatch(toastActions.pop_toast({ status: true, msg: response.msg }));
      dispatch(toastActions.pop_toast({ msg: 'Waiting for kboard to start recording', status: true }));
      return dispatch(add_demo_success(response));
    }).catch((err) => {
      return dispatch(toastActions.pop_toast({ status: false, msg: err }));
    })
  }
}

function set_copy() {
  return { type: types.SET_COPY }
}
