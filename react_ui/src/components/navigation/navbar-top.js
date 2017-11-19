import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import DnDProvider from "../../providers/dnd";
import {connect} from 'react-redux';

class NavBarTop extends Component {
  componentDidMount() {
    this.props.DnDProvider.getHeroes();
  }

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
    DnDProvider: new DnDProvider(dispatch)
  })
)(NavBarTop);
