import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

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

export default NavBarTop;
