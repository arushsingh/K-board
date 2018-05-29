import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ToastrMarkup from './toastr-markup';
import * as toastrActions from '../../../actions/toastr-actions';

class Toastr extends React.Component {

  removeToast = (event) => {
    const toastId = event.currentTarget.getAttribute('data-id');
    this.props.actions.remove_toast({ id: toastId });
  }
  render() {
    return (
      <ToastrMarkup toasts={this.props.toasts} removeToast={this.removeToast} />
    );
  }
}

const { array, object } = PropTypes;

Toastr.propTypes = {
  toasts: array.isRequired,
  actions: object.isRequired
}

function mapStateToProps(state) {
  return {
    toasts: state.toasts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toastrActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toastr);
