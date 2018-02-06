import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HPBar from '../HPBar';
import StarTextDelimiter from '../StarTextDelimiter';


class HeroSpellsTab extends Component {
  static propTypes = {
    hero: PropTypes.shape({
      hitPoints: PropTypes.number,
      maxHp: PropTypes.number,
    }).isRequired,
  };

  render() {
    const { hero } = this.props;
    const { spells = [] } = hero;
    return (
      <div>
        <h2>Spells</h2>
        {
          spells.map(spell => (
            <div key={spell.id} className="spell-box">
              <div className={`title ${spell.usageType}`}>
                <span className="name">{spell.name}</span>
                <span className="level">{spell.type} {spell.heroClass || spell.race} {spell.level}</span>
              </div>
              <div className="description">{spell.description}</div>
              <b>{spell.usageType}<StarTextDelimiter />{spell.keywords}</b><br />
              <b>{spell.actionType}<StarTextDelimiter />{spell.attackType}</b><br />
              <b>Цель:</b> {spell.aim}<br />
              <b>Атака:</b> {spell.attackAbility} против {spell.attackAgainst}<br />
              <b>Попадание:</b> {spell.hit} <br />
              {
                spell.miss ?
                  `Промах: ${spell.miss}`
                  :
                  null
              }
              {
                spell.other && spell.other.length > 0 ?
                  <div className="other-features">{spell.other}</div>
                  : null
              }
              <hr />
            </div>
          ))
        }
      </div>
    );
  }
}

export default HeroSpellsTab;
