import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {STATIC_URL} from "../context";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Route} from "react-router";
import HeroStatsPage from "./hero-stats";

class HeroDetail extends Component {

  constructor(props) {
    super(props);
    this.id = parseInt(props.match.params.id);
    const hero = this.getHero(props);

    this.state = {
      hero: hero
    }
  }

  componentWillReceiveProps(nextProps) {
    const hero = this.getHero(nextProps);
    this.setState({hero: hero});
  }

  getHero(props) {
    const {heroes} = props;
    // return heroes.find((hero) => hero.id === this.id) || {};
    return {
      "id":1,
      "first_name":"Надар",
      "last_name":"Бесстрашный",
      "age":30,
      "height":190,
      "weight":130,
      "organization":"-",
      "strength":14,
      "constitution":14, "dexterity":10, "intelligence":9,
      "wisdom":19,"charisma":10,
      "ability_points":0,
      "current_hp":58
    }
  }

  render() {
    const {hero} = this.state;
    return (
      <div className="page-container hero-detail">
        <div className="page-header">Hero's Profile</div>
        <div className="page-content">
          <div className="hero-navigation-bar">
            <NavLink to={`${this.id}/stats`} className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/weight-lifting-up.svg`} style={{maxHeight: 50, maxWidth: 50}}
                     alt="Stats"/>
                <div>
                  Stats
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/jump-across.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Skills
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/fire-tail.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Spells
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/battle-gear.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Equipment
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/knapsack.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Inventory
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/quill-ink.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Notes
                </div>
              </div>
            </NavLink>
            <NavLink to="/" className="nav-element">
              <div className="container">
                <img src={`${STATIC_URL}images/svg/read.svg`} style={{maxHeight: 50, maxWidth: 50}}/>
                <div>
                  Profile
                </div>
              </div>
            </NavLink>
          </div>
          {/*<+div className="general-data">*/}
            {/*<div className="general-info">*/}
              {/*<div className="name text">{hero.first_name} {hero.last_name}</div>*/}
              {/*<div className="text">Age: <span className="number">{hero.age}</span></div>*/}
              {/*<div className="text">Weight: <span  className="number">{hero.weight}</span></div>*/}
              {/*<div className="text">Abilities:</div>*/}
              {/*<div className="abilities-list">*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Сила*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.strength}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Телосложение*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.constitution}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Ловкость*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.agility}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Интеллект*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.intelligence}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Мудрость*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.wisdom}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ability-container">*/}
                  {/*<div className="ability-name">*/}
                    {/*Харизма*/}
                  {/*</div>*/}
                  {/*<div className="ability-value">*/}
                    {/*{hero.charisma}*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}

            {/*</div>*/}
          {/*</div>*/}
          <Route path="/stats" component={HeroStatsPage}/>
        </div>
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
)(HeroDetail);
