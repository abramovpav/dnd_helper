import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HPBar from '../HPBar';
import HeroUtils from '../../utils/HeroUtils';
import DnDProvider from '../../providers/dnd';


class HeroStatsTab extends Component {
  static propTypes = {
    hero: PropTypes.shape({
      damageTaken: PropTypes.number,
      maxHp: PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      damageValue: 0,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onCommitDamage = this.onCommitDamage.bind(this);
  }

  onCommitDamage() {
    const { hero } = this.props;
    const { damageValue } = this.state;
    this.props.commitHeroDamage(hero.id, damageValue);
  }

  onHandleChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { hero } = this.props;
    const { damageValue } = this.state;
    return (
      <div>
        <h2>Hit Points</h2>
        <HPBar hp={HeroUtils.getHitPoints(hero)} maxHP={hero.maxHp} />
        <div>
          Max HP: {hero.maxHp}
          Damage Taken: {hero.damageTaken}
        </div>
        <div>
          <input type="number" name="damageValue" value={damageValue} onChange={this.onHandleChange} required />
          <button className="btn red" onClick={this.onCommitDamage}>Commit</button>
        </div>
        <h2>Ability Scores, Savings Throw, and Other Stats</h2>
        <div>
          Click on your Ability Scores to add or edit them. Savings Throw modifiers automatically include your Ability
          core modifier and Proficiency Bonus.
        </div>
        <ul>
          <li>Strength {hero.strength}</li>
          <li>Dexterity {hero.dexterity}</li>
          <li>Constitution {hero.constitution}</li>
          <li>Intelligence {hero.intelligence}</li>
          <li>Wisdom {hero.wisdom}</li>
          <li>Charisma {hero.charisma}</li>
        </ul>
        <h2>Defences</h2>
        <ul>
          <li>AC {hero.armorClass}</li>
          <li>Fortitude {hero.fortitude}</li>
          <li>Reflex {hero.reflex}</li>
          <li>Will {hero.will}</li>
        </ul>
        <h2>Other Stats</h2>
        <ul>
          <li>Experience {hero.experience}</li>
          <li>Speed {hero.race.speed}</li>
          <li>Vision {hero.race.vision}</li>
          <li>Size {hero.race.size}</li>
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: state.dnd.heroes.loading,
  }),
  dispatch => ({
    commitHeroDamage: (heroId, damageValue) => new DnDProvider(dispatch).commitHeroDamage(heroId, damageValue),
  }),
)(HeroStatsTab);
