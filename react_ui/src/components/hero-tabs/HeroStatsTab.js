import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HPBar from '../HPBar';


class HeroStatsTab extends Component {
  static propTypes = {
    hero: PropTypes.shape({
      hitPoints: PropTypes.number,
      maxHp: PropTypes.number,
    }).isRequired,
  };

  render() {
    const { hero } = this.props;
    return (
      <div>
        <h2>Hit Points</h2>
        <HPBar hp={hero.hitPoints} maxHP={hero.maxHp} />
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

export default HeroStatsTab;
