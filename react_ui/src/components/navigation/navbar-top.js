import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import DnDProvider from '../../providers/dnd';


class NavBarTop extends Component {
  render() {
    return (
      <div className="navbar-top">
        <NavLink to="/" className="nav-element">
          DnD Helper
        </NavLink>
        <div className="nav-element">
          Link
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    DnDProvider: new DnDProvider(dispatch),
  }),
)(NavBarTop);
