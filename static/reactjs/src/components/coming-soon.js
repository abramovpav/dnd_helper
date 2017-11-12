import React, { Component, PropTypes } from 'react';
// import {STATIC_URL} from "../context";

STAIC_URL = '';

export default class ComingSoon extends Component {

  render(){
    return (
      <div className="coming-soon-container">
        <h1>This page coming soon.</h1>
        <br/>
        <h2>Thanks for choosing us!</h2>
        <br/>
        <br/>
        <img src={`${STATIC_URL}images/teacher/gears.svg`} width='100px' height='100px'/>
      </div>
    )
  }
}
