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

  static restType = {
    short: 'short',
    long: 'long',
  };

  constructor(props) {
    super(props);

    this.onCommitRest = this.onCommitRest.bind(this);
  }

  onCommitRest(restType) {
    const { hero } = this.props;
    this.props.commitHeroRest(hero.id, restType);
  }

  render() {
    return (
      <div>
        <h2>Resting</h2>
        Take a break to replenish your abilities and hit points.
        <div style={{ textAlign: 'center' }}>
          <button
            className="btn green"
            onClick={() => this.onCommitRest(HeroStatsTab.restType.short)}
            style={{ marginRight: 5 }}
          >
            <img src="/static/images/short-rest.svg" alt="short-rest" height="65" width="65" /><br />Short Rest
          </button>
          <button className="btn red" onClick={() => this.onCommitRest(HeroStatsTab.restType.long)}>
            <img src="/static/images/long-rest.svg" alt="long-rest (tent)" height="65" width="65" /><br />Long Rest
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: state.dnd.heroes.loading,
  }),
  dispatch => ({
    commitHeroRest: (heroId, restType) => new DnDProvider(dispatch).commitHeroRest(heroId, restType),
  }),
)(HeroStatsTab);
