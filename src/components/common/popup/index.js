import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './popup.css';

class Popup extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }
  render() {
    return (
      <section className="card popup">
        <header>
          <h2>{this.props.heading}</h2>
          <button className="close" onClick={this.props.onClickCloseButton}><i className="fa fa-times"></i></button>
        </header>
        <div className="content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

Popup.propTypes = {
  props: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  onClickCloseButton: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired
}


export default Popup;
