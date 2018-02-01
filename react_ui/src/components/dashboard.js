import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import DnDProvider from '../providers/dnd';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onHeroClick = this.onHeroClick.bind(this);
  }

  componentDidMount() {
    const { dnDProvider } = this.props;
    dnDProvider.getHeroes();
  }

  onHeroClick(heroId) {
    this.props.redirectToHeroDetails(heroId);
  }

  render() {
    const { heroes } = this.props;
    return (
      <div className="page-container dashboard">
        <div className="page-header">Dashboard</div>
        <div className="page-content">
          <div className="heroes-list">
            {
              heroes.map(hero => (
                <div key={hero.id} className="hero-item" onClick={() => this.onHeroClick(hero.id)}>
                  <div className="hero-avatar"><div className="fake-hero-avatar" /></div>
                  <div className="hero-info">
                    <div className="name text">{hero.first_name} {hero.last_name}</div>
                    <div className="text">Age: <span className="number">{hero.age}</span></div>
                    <div className="text">Weight: <span className="number">{hero.weight}</span></div>
                  </div>
                </div>
              ))
            }
          </div>
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
    dnDProvider: new DnDProvider(dispatch),
    redirectToHeroDetails: (heroId) => { dispatch(push(`/heroes/${heroId}`)); },
  }),
)(Dashboard);
