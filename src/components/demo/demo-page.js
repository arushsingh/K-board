import './demo-page.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoDetails from './components/demoDetails';
import FileManager from './components/filemanager';
import * as demoActions from '../../actions/demo-actions';
import TextEditor from '../demo/texteditor';
class DemoPage extends React.Component {
  render() {
    return (
      <div className="demo-page page-container grid-container">
        <DemoDetails title={this.props.demo.title}
          topic={this.props.demo.topic}
          subtopic={this.props.demo.subtopic}
          id={this.props.demo.id}
          author={this.props.user.author} />
        <FileManager />
        <TextEditor />
      </div>
    )
  }
}
const { object } = PropTypes;
DemoPage.propTypes = {
  demo: object.isRequired,
  actions: object.isRequired,
  user: object.isRequired
}

const mapStateToProps = (state) => {
  return {
    demo: state.demo,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(demoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);