import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {STATIC_URL} from "../context";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Route} from "react-router";

class HeroStatsPage extends Component {
  // static propTypes = {
  //   hero: PropTypes.object.isRequired
  // };
  //
  constructor(props) {
    super(props);
  }

  render() {
    const {hero} = this.props;
    return (
      <div className="">
        <div>STATS</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    heroes: state.dnd.heroes,
  }),
  dispatch => ({
    // DnDProvider: new DnDProvider(dispatch)
  })
)(HeroStatsPage);
