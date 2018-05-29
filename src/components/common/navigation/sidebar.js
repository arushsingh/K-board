import './sidebar.css';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const sidebar = ({ activeStyle }) => {
  return (
    <div className="sidebar-container">
      <div className="card sidebar">
        <ul className="icon-list">
          <li className="icon"><NavLink to="/" activeStyle={activeStyle}><i className="fa fa-home"></i></NavLink></li>
          <li className="icon"><NavLink to="/demo" activeStyle={activeStyle}><i className="fa fa-code"></i></NavLink></li>
          <li className="icon"><NavLink to="/add" activeStyle={activeStyle}><i className="fa fa-plus"></i></NavLink></li>
          <li className="icon"><NavLink to="/students" activeStyle={activeStyle}><i className="fa fa-id-badge"></i></NavLink></li>
          <li className="icon"><NavLink to="/asessment" activeStyle={activeStyle}><i className="fa fa-flag-checkered"></i></NavLink></li>
        </ul>
      </div>
    </div>
  );
}

const { object } = PropTypes;

sidebar.propTypes = {
  activeStyle: object.isRequired
}

export default sidebar;
