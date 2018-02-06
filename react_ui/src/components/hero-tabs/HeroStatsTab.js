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
      healValue: 0,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onCommitDamage = this.onCommitDamage.bind(this);
    this.onCommitHeal = this.onCommitHeal.bind(this);
  }

  onCommitDamage() {
    const { hero } = this.props;
    const { damageValue } = this.state;
    this.props.commitHeroDamage(hero.id, damageValue).then(() => this.setState({ damageValue: 0 }));
  }

  onCommitHeal() {
    const { hero } = this.props;
    const { healValue } = this.state;
    this.props.commitHeroHeal(hero.id, healValue).then(() => this.setState({ healValue: 0 }));
  }

  onHandleChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { hero } = this.props;
    const { damageValue, healValue } = this.state;
    return (
      <div>
        <h2>Hit Points</h2>
        <HPBar hp={HeroUtils.getHitPoints(hero)} maxHP={hero.maxHp} />
        <div>
          Max HP: {hero.maxHp}
          Damage Taken: {hero.damageTaken}
        </div>
        <div>
          <h3>Damage</h3>
          <input type="number" name="damageValue" value={damageValue} onChange={this.onHandleChange} required />
          <button className="btn red" onClick={this.onCommitDamage}>Commit</button>
        </div>
        <div>
          <h3>Healing</h3>
          <div>
            Healing value: {hero.healingValue} ({hero.healingMaxCount - hero.healingsUsed}/{hero.healingMaxCount})
          </div>
          <input type="number" name="healValue" value={healValue} onChange={this.onHandleChange} required />
          <button className="btn green" onClick={this.onCommitHeal}>Commit Heal</button>
        </div>
        <h2>Ability Scores, Savings Throw, and Other Stats</h2>
        <div>
          Click on your Ability Scores to add or edit them. Savings Throw modifiers automatically include your Ability
          core modifier and Proficiency Bonus.
        </div>
        <ul>
          <li>Strength {hero.strength} (<b>{HeroUtils.getAbilityModifier(hero, 'strength')}</b>)</li>
          <li>Dexterity {hero.dexterity} (<b>{HeroUtils.getAbilityModifier(hero, 'dexterity')}</b>)</li>
          <li>Constitution {hero.constitution} (<b>{HeroUtils.getAbilityModifier(hero, 'constitution')}</b>)</li>
          <li>Intelligence {hero.intelligence} (<b>{HeroUtils.getAbilityModifier(hero, 'intelligence')}</b>)</li>
          <li>Wisdom {hero.wisdom} (<b>{HeroUtils.getAbilityModifier(hero, 'wisdom')}</b>)</li>
          <li>Charisma {hero.charisma} (<b>{HeroUtils.getAbilityModifier(hero, 'charisma')}</b>)</li>
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
    commitHeroHeal: (heroId, healValue) => new DnDProvider(dispatch).commitHeroHeal(heroId, healValue),
  }),
)(HeroStatsTab);
