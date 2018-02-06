import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HPBar from '../HPBar';
import HeroUtils from '../../utils/HeroUtils';
import DnDProvider from '../../providers/dnd';


class HeroInventoryTab extends Component {
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

    this.onCommitDamage = this.onCommitDamage.bind(this);
  }

  onCommitDamage() {
    const { hero } = this.props;
    const { damageValue } = this.state;
    this.props.commitHeroDamage(hero.id, damageValue).then(() => this.setState({ damageValue: 0 }));
  }

  render() {
    const { hero } = this.props;
    return (
      <div className="inventory-tab">
        <h2>Treasure & Magic Items</h2>
        <div className="money-block">
          <div className="coin">
            <div className="icon-wrapper">
              <img src="/static/images/platinum-coin.svg" alt="Platinum Coins" />
            </div>
            <span className="quantity">0</span>
          </div>
          <div className="coin">
            <div className="icon-wrapper">
              <img src="/static/images/gold-coin.svg" alt="Golden Coins" />
            </div>
            <span className="quantity">{hero.inventory.goldCoins}</span>
          </div>
          <div className="coin">
            <div className="icon-wrapper">
              <img src="/static/images/silver-coin.svg" alt="Silver Coins" />
            </div>
            <span className="quantity">{hero.inventory.silverCoins}</span>
          </div>
          <div className="coin">
            <div className="icon-wrapper">
              <img src="/static/images/copper-coin.svg" alt="Copper Coins" />
            </div>
            <span className="quantity">{hero.inventory.copperCoins}</span>
          </div>
        </div>
        <div>
          <select>
            <option value="platinum">Platinum</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="copper">Copper</option>
          </select>
          <input type="number" placeholder="100" />
          <button className="btn blue">Add Money</button>
        </div>
        <h2>Items</h2>
        <ul>
          {
            hero.inventory.items.map(item => (
              <li>{item.name}</li>
            ))
          }
          {
            hero.inventory.items.length === 0 ? <li className="no-items">No items</li> : null
          }
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
)(HeroInventoryTab);
