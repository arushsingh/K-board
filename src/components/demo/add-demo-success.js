import './add-demo-success.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/demo-actions';
import Markup from './add-demo-success-markup';

class AddDemoSuccess extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.textArea = React.createRef();
    const bbObj = {
      namespace: this.props.demo.title,
      topic: this.props.demo.topic,
      subtopic: this.props.demo.subtopic,
      mode: 'record',
      scope: 'demo',
      token: this.props.demo.token
    }
    this.state = {
      dataStr: "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bbObj))
    }

  }

  onClickCopyToken = (e) => {
    this.textArea.current.select();
    document.execCommand('copy');
    e.target.focus();
    this.props.actions.set_copy();
  }

  onClickFileDownload = () => {

  }

  render() {
    return (
      <Markup
        bbUrl={this.state.dataStr}
        copied={this.props.demo.isCopied}
        textArea={this.textArea}
        title={this.props.demo.title}
        token={this.props.demo.token}
        onClickCopyToken={this.onClickCopyToken}
        onClickFileDownload={this.onClickFileDownload} />
    );
  }
}

function mapStateToProps(state) {
  return {
    demo: state.demo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const { object } = PropTypes;

AddDemoSuccess.propTypes = {
  demo: object.isRequired,
  actions: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDemoSuccess);
