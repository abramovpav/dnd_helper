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
      </div>
    );
  }
}

export default HeroStatsTab;
