import './add-page.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from '../common/popup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/add-page-actions';

class AddPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fields: [
        { id: 0, text: 'Demo', icon: 'fa fa-code', color: '', boxShadow: '1px 1px 5px -0px rgba(0,219,118,0.75)' },
        { id: 1, text: 'Course', icon: 'fa fa-book', color: '', boxShadow: '1px 1px 5px -0px rgba(0,191,227,0.75)' },
        { id: 2, text: 'User', icon: 'fa fa-user', color: '', boxShadow: '1px 1px 5px -0px rgba(245,107,81,0.75)' },
        { id: 3, text: 'Schedule', icon: 'fa fa-calendar', color: '', boxShadow: '1px 1px 5px -0px rgba(232,199,70,0.75)' },
        { id: 4, text: 'Author', icon: 'fa fa-edit', color: '', boxShadow: '1px 1px 5px -0px rgba(186,189,194,0.75)' }
      ]
    }
    this.popupHeading = "Add";
  }
  componentDidMount() {
    this.setState(this.state);
    setTimeout(() => {
      const newState = Object.assign({}, this.state);
      const newBorder = '';
      let newFields = [];
      const fields = [...newState.fields];
      for (let item of fields) {
        switch (item.text) {
          case 'Demo': {
            const newColor = 'rgba(0,219,118,0.8)';
            item.color = newColor;
            item.boxShadow = newBorder;
            newFields = [...newFields, item]
            newState.fields = newFields;
            break;
          }

          case 'Course': {
            const newColor = 'rgba(0,191,227, 0.8)';
            item.color = newColor;
            item.boxShadow = newBorder;
            newFields = [...newFields, item]
            newState.fields = newFields;

            break;
          }
          case 'User': {
            const newColor = 'rgba(245,107,81, 0.8)';
            item.color = newColor;
            item.boxShadow = newBorder;
            newFields = [...newFields, item]
            newState.fields = newFields;
            break;
          }

          case 'Schedule': {
            const newColor = 'rgba(232,199,70, 0.8)';
            item.color = newColor;
            item.boxShadow = newBorder;
            newFields = [...newFields, item]
            newState.fields = newFields;
            break;
          }

          default: {
            const newColor = 'rgba(186,189,194,0.8)';
            item.color = newColor;
            item.boxShadow = newBorder;
            newFields = [...newFields, item]
            newState.fields = newFields;
          }
        }
      }
      this.setState(newState);
    }, 300);
  }

  onClickAddButton = (event) => {
    event.preventDefault();
    const text = event.currentTarget.getAttribute('data-name');
    this.props.actions.go_to_target_page(text);
  }

  mapFields = (element) => {
    const style = { background: element.background, boxShadow: element.boxShadow, WebkitBoxShadow: element.boxShadow, MozBoxShadow: element.boxShadow };
    const iconStyle = { color: element.color };
    return (<li key={element.id} className="card item" style={style} data-name={element.text} onClick={this.onClickAddButton}>
      <i className={element.icon} style={iconStyle}></i>
      <h3>{element.text}</h3>

    </li>)
  }
  onClickCloseButton = () => {

  }
  render() {
    return (
      <div className="add-page">
        <Popup onClickCloseButton={this.onClickCloseButton} heading={this.popupHeading}>
          <ul>
            {this.state.fields.map(this.mapFields)}
          </ul>
        </Popup>
      </div>
    );
  }
}

AddPage.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
