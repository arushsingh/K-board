import './toastr.css';
import React from 'react';
import PropTypes from 'prop-types';

const ToastrMarkup = ({ toasts, removeToast }) => {

  const mapToasts = (toast) => {
    let toastClass = 'toast warning show';
    if (toast.status) {
      toastClass = 'toast okay show';
    }
    const msg = JSON.stringify(toast.msg);
    return (<li className={toastClass} key={toast.id}>
      <button className="closeButton" data-id={toast.id} onClick={removeToast}><i className="fa fa-close"></i></button>
      <p className="msg">{msg}</p>
    </li>
    );
  }
  return (
    <ul className="toastr">
      {(toasts.length > 0) && toasts.map(mapToasts)}
    </ul>
  )
}

const { array, func } = PropTypes;

ToastrMarkup.propTypes = {
  toasts: array.isRequired,
  removeToast: func.isRequired
}



export default ToastrMarkup;
