import React from 'react';
import PropTypes from 'prop-types';
import './demoDetails.css';

const DemoDetails = ({ title, topic, subtopic, author, id }) => {
  return (
    <div className="grid-one">
      <div className="demo-details card raw">
        <div className="details">

          <div className="details-container">
            <h1>{title || 'Html forms'}</h1>
            <div className="tag-container">
              <span className="tag">{topic || 'html'}</span>
              <span className="tag">{subtopic || 'forms'}</span>
            </div>
            <div className="key-value-accent author-container">
              <span className="label">by </span>
              <span className="name highlighted">{author || 'Konfinity'}</span>
            </div>
            <div className="key-value-accent id-container">
              <span className="label">id</span>
              <span className="name">{id || '102849283'}</span>
            </div>
          </div>
        </div>
        <div className="events">
          <div className="events-container">
            <h3>Status</h3>
            <ul className="status-list">
              <li><i className="fa fa-pause next"></i>Waiting for pause</li>
              <li><i className="fa fa-hourglass-half waiting"></i> Waiting for kboard to record</li>
              <li> <i className="fa fa-check done"></i> Created on 12/12/2012</li>
            </ul>
          </div>
        </div>
        <div className="controls-container">
          <button className="card"><i className="fa fa-bookmark"></i></button>
          <button className="card highlighted"><i className="fa fa-play"></i></button>
          <button className="card"><i className="fa fa-save"></i></button>

        </div>
      </div >
    </div>
  )
}
const { string } = PropTypes;
DemoDetails.propTypes = {
  title: string.isRequired,
  topic: string.isRequired,
  subtopic: string.isRequired,
  author: string.isRequired,
  id: string.isRequired
}
export default DemoDetails;