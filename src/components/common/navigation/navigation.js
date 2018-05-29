/*eslint-disable no-console*/
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Navigation = ({ activeStyle, logo, onClickOpenSidebar, isLoggedIn, userName, isUserMenuOpen, onClickUser, onClickLogin }) => {
  if (!userName) {
    console.log('user name', userName);
    userName = 'Guest'
  }

  return (
    <div className="navigation">
      <ul className="primary-navigation" role="navigation">
        <li className="sidebar-button"><button className="sidebar-button" onClick={onClickOpenSidebar}><i className="fa fa-bars"></i></button></li>
        <li className="brand"><NavLink exact to="/"><img src={logo} alt="logo" /></NavLink></li>
        <li className="brand-name"><span className="accent">Kon</span>finity</li>
        <ul className="left">
          <li className="links"><NavLink to="/add-course" activeStyle={activeStyle}>Add course</NavLink></li>
          <li className="links"><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
          <li className="links"><NavLink to="/not-found" activeStyle={activeStyle}>No link</NavLink></li>
        </ul>
        <ul className="user-profile">
          <li className="user-icon"><button onClick={onClickUser}><i className="fa fa-user"></i></button></li>
        </ul>
      </ul>
      {isUserMenuOpen &&

        <div className="card side-menu">
          <button onClick={onClickUser}><i className="fa fa-close"></i></button>
          <p>Welcome <span> {userName} </span></p>

          {isLoggedIn &&
            <div>
              <ul>
                <li><NavLink to="/profile" activeStyle={activeStyle}> Profile</NavLink></li>
                <li><NavLink to="/settings" activeStyle={activeStyle}>Settings</NavLink></li>
                <li className="logout-link" onClick={onClickLogin}>Logout</li>
              </ul>
            </div>
          }
          {
            !isLoggedIn &&
            <ul>
              <li className="login_button"><button className="login-button" onClick={onClickLogin} activeStyle={activeStyle}>Login</button></li>
            </ul>
          }
        </div>
      }
    </div>
  );
}

const { object, string, func, bool } = PropTypes;

Navigation.propTypes = {
  activeStyle: object.isRequired,
  logo: string.isRequired,
  onClickOpenSidebar: func.isRequired,
  isLoggedIn: bool.isRequired,
  userName: string.isRequired,
  isUserMenuOpen: bool.isRequired,
  onClickUser: func.isRequired,
  onClickLogin: func.isRequired
}

export default Navigation;
