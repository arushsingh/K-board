import './primary-navigation.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActions from '../../../actions/nav-actions';
import * as authActions from '../../../actions/auth-actions';

const logo = require('../assets/logo.png');

class PrimaryNavigation extends Component {

  onClickUser = () => {
    this.props.actions.toggle_user_menu();
  }

  onClickOpenSidebar = () => {

  }

  onClickLogin = () => {
    if (this.props.user.isLoggedIn) {
      this.props.actions.toggle_user_menu();
      this.props.userActions.logout();
    } else {
      this.props.actions.toggle_user_menu();
      const redirect = '/';
      this.props.userActions.go_to_auth_page({ redirect });
    }
  }

  render() {
    const activeStyle = { color: '#f70001' };
    return (
      <div className="navigation-container">
        <Navigation activeStyle={activeStyle}
          logo={logo}
          onClickOpenSidebar={this.onClickOpenSidebar}
          isLoggedIn={this.props.user.isLoggedIn}
          userName={this.props.user.email}
          isUserMenuOpen={this.props.nav.userToggleState}
          onClickUser={this.onClickUser}
          onClickLogin={this.onClickLogin} />
        <Sidebar activeStyle={activeStyle} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navigationActions, dispatch),
    userActions: bindActionCreators(authActions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    nav: state.nav,
    location
  }
}

const { object, string } = PropTypes;

PrimaryNavigation.propTypes = {
  user: object.isRequired,
  nav: object.isRequired,
  actions: object.isRequired,
  userActions: object.isRequired,
  location: string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNavigation);
