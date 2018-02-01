import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import DnDProvider from '../providers/dnd';
import Loader from '../components/LoadingWrapper';


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
    const { heroes, loading = true } = this.props;
    return (
      <div className="page-container dashboard">
        <div className="page-header">Dashboard</div>
        <div className="page-content">
          <Loader isLoading={loading}>
            <div className="heroes-list">
              {
                Object.values(heroes).map(hero => (
                  <div key={hero.id} className="hero-item" onClick={() => this.onHeroClick(hero.id)}>
                    <div className="hero-avatar"><div className="fake-hero-avatar" /></div>
                    <div className="hero-info">
                      <div className="name text">{ hero.fullName }</div>
                      <div className="text">Race: <span className="number">{ hero.race.name }</span></div>
                      <div className="text">Level: <span className="number">{ hero.level }</span></div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    heroes: state.dnd.heroes.objects,
    loading: state.dnd.heroes.loading,
  }),
  dispatch => ({
    dnDProvider: new DnDProvider(dispatch),
    redirectToHeroDetails: (heroId) => { dispatch(push(`/heroes/${heroId}/`)); },
  }),
)(Dashboard);
