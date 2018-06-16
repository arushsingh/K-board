
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as userActions from '../../actions/auth-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string'

class LoginPage extends Component {

  onChangeLoginForm = (event) => {
    const field = event.target.getAttribute('data-name');
    const value = event.target.value;
    this.props.actions.on_change_login_form({ field, value });
  }

  onLoginSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.token && !this.props.relation) {
      const loginTokenModel = { token: this.props.token, pass: this.props.user.pass, mode: 'dashboard' };
      return this.props.actions.login(loginTokenModel);
    }
    if (!this.props.user.email) {
      return this.props.actions.show_error_msg({ msg: 'Enter a valid email' });
    }
    if (this.props.token && this.props.relation === 'kboard') {
      const loginTokenModel = { token: this.props.token, pass: this.props.user.pass, email: this.props.user.email, mode: 'dashboard' };
      return this.props.actions.login(loginTokenModel);
    }
    const loginModel = { email: this.props.user.email, pass: this.props.user.pass, mode: 'dashboard' };
    this.props.actions.login(loginModel);
  }

  render() {
    const relations = this.props.relation;
    let showEmail = false;
    if (relations == 'kboard') {
      showEmail = true;
    }
    return (
      <div className="card card-medium login login-homepage">
        <h2>Login</h2>
        <form name="login">
          {showEmail && <input type="email" placeholder="email" onChange={this.onChangeLoginForm} data-name="email" />}
          <input type="password" placeholder="password" onChange={this.onChangeLoginForm} data-name="pass" />
          <input type="submit" value="Login" className="card" onClick={this.onLoginSubmit} />
        </form>
      </div>
    )
  }
}

const { object, string } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired,
  user: object.isRequired,
  token: string.isRequired,
  relation: string.isRequired
}

function mapStateToProps(state, ownProps) {
  const urlParams = qs.parse(ownProps.location.search);
  const { token, rel } = urlParams;
  return {
    user: state.user,
    token,
    relation: rel
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
