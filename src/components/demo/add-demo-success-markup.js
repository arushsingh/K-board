import React from 'react';
import PropTypes from 'prop-types';

const AddDemoSuccessMarkup = ({ title, token, onClickCopyToken, textArea, isCopied, bbUrl }) => {
  let copyClass = 'copy-token';
  if (isCopied) {
    copyClass = 'copy-token success';
  }

  return (
    <div className="add-demo-success page-container">
      <h1>Demo</h1>
      <div className="card card-medium">
        <div className="card-content">
          <header>
            <h2>Details</h2>
          </header>
          <div className="content">
            <div className="title-container"><span>Title:</span><span>{title}</span></div>
            <div className="token-container">
              <span className="title">Token:</span>
              <textarea className="token" ref={textArea}>{token}</textarea>
              <button className={copyClass} onClick={onClickCopyToken}><i className="fa fa-copy"></i></button>
            </div>
            <div className="file-download-container">
              <a download="bbConfig.json" className="file-download" href={bbUrl} >Download <span className="code">bbConfig.js</span>file</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const { string, func, bool, object } = PropTypes;

AddDemoSuccessMarkup.propTypes = {
  title: string.isRequired,
  onClickCopyToken: func.isRequired,
  onClickFileDownload: func.isRequired,
  token: string.isRequired,
  isCopied: bool.isRequired,
  bbUrl: string,
  textArea: object
}

export default AddDemoSuccessMarkup;
