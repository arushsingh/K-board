import React from 'react';
import PropTypes from 'prop-types';
import './add-demo.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as demoActions from '../../actions/demo-actions';

class AddDemo extends React.Component {

  onChangeForm = (event) => {
    const field = event.target.getAttribute('data-name');
    const value = event.target.value;
    this.props.actions.on_add_demo_form_change({ field, value });
  }

  onClickSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const demoModel = { title: this.props.demo.title, topic: this.props.demo.topic, subtopic: this.props.demo.subtopic };
    this.props.actions.on_add_demo_form_submit(demoModel);
  }

  render() {
    return (
      <div className="add-demo page-container">
        <h2>Add demo</h2>
        <div className="card card-medium">
          <form>
            <input type="text" placeholder="Title" onChange={this.onChangeForm} data-name="title" />
            <input type="text" placeholder="Topic" onChange={this.onChangeForm} data-name="topic" />
            <input type="text" placeholder="Subtopic" onChange={this.onChangeForm} data-name="subtopic" />
            <input type="submit" value="Submit" onClick={this.onClickSubmit} />
          </form>
        </div>
        {this.props.demo.title}||{this.props.demo.topic} ||{this.props.demo.subtopic}
      </div>
    )
  }
}

const { object } = PropTypes;

AddDemo.propTypes = {
  actions: object.isRequired,
  demo: object.isRequired
}

function mapStateToProps(state) {
  return {
    demo: state.demo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(demoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDemo);
