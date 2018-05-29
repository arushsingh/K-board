import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as demoActions from '../../actions/demo-actions';

class DemosPage extends React.Component {
  mapDemos = (demo, index) => {
    return (
      <li key={index}>
        <div>{demo.created}</div>
        <div>{demo.title}</div>
        <div>{demo.topic}</div>
        <div>{demo.subtopic}</div>
        <div>{demo.created}</div>
      </li>);
  }
  render() {
    return (
      <div className="main-container">
        <h2>Demos</h2>
        <div className="demo-container">
          <ul className="demo-list">
            {(this.props.demos.length > 0) && this.props.demos.map(this.mapDemos)}
            {(this.props.demos.length === 0) && (<li><p>No item found</p></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

const { array, object } = PropTypes;

DemosPage.propTypes = {
  demos: array.isRequired,
  actions: object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    demos: state.demos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(demoActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemosPage);