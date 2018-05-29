import * as types from '../actions/action-types';
import initialStates from './initial-states';
import { store } from '../index';
import * as actions from '../actions/toastr-actions';

const toastReducer = (state = initialStates.toasts(), action) => {
  switch (action.type) {
    case types.POP_TOAST: {
      const newState = [...state];
      const toasts = _filterArray(newState);
      const lastToast = toasts[toasts.length - 1];
      let lastId = -1;
      if (lastToast) {
        lastId = lastToast.id;
      }
      const newToast = {
        id: lastId + 1,
        msg: action.data.msg,
        status: action.data.status
      }

      setTimeout(() => {
        store.dispatch(actions.remove_toast({ id: newToast.id }))
      }, 10000);

      return [...toasts, newToast];
    }
    case types.REMOVE_TOAST: {
      const newState = [...state];
      const toasts = _filterArray(newState);
      const elemPosition = _findPositionById(toasts, action.data.id);
      return [...toasts.slice(0, elemPosition), ...toasts.slice(elemPosition + 1, elemPosition.length)]
    }
    default:
      return state;
  }
}

const _filterArray = (arr) => {
  return arr.sort((el1, el2) => {
    return el1.id > el2.id;
  });
}

const _findPositionById = (arr, id) => {
  let position = 0;
  for (let elem of arr) {
    if (elem.id == id) {
      return position;
    }
    position++;
  }
}

export default toastReducer;
