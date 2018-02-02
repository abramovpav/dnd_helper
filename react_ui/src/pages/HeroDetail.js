import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Loader from '../components/LoadingWrapper';
import DnDProvider from '../providers/dnd';
import HPBar from '../components/HPBar';
import HeroStatsTab from '../components/hero-tabs/HeroStatsTab';
import HeroSpellsTab from '../components/hero-tabs/HeroSpellsTab';


class HeroDetail extends Component {
  componentWillMount() {
    const { id: heroId } = this.props.match.params;
    this.props.getHero(heroId).then(() => this.props.getHeroSpells(heroId));
  }

  render() {
    const { heroes, hero, loading = true } = this.props;
    const { race = {} } = hero;

    return (
      <div className="page-container hero-detail">
        <div className="page-header">Hero&apos;s Profile</div>
        <div className="page-content">
          <Loader isLoading={loading}>
            <div className="general-data">
              <div className="general-info">
                <div className="name text">{hero.fullName}</div>
                <div className="text">Race: <span className="number">{race.name}</span></div>
                <div className="text">Level: <span className="number">{hero.level}</span></div>
              </div>
              <Tabs>
                <TabList>
                  <Tab>Stats</Tab>
                  <Tab>Skills</Tab>
                  <Tab>Spells</Tab>
                  <Tab>Equipment</Tab>
                  <Tab>Inventory</Tab>
                  <Tab>Notes</Tab>
                  <Tab>Profile</Tab>
                </TabList>

                <TabPanel>
                  <HeroStatsTab hero={hero} />
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <HeroSpellsTab hero={hero} />
                </TabPanel>
                <TabPanel>
                  <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 5</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 6</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 7</h2>
                </TabPanel>
              </Tabs>
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    heroes: state.dnd.heroes,
    hero: state.dnd.heroes.objects[props.match.params.id] || {},
    loading: state.dnd.heroes.loading,
  }),
  dispatch => ({
    getHero: heroId => new DnDProvider(dispatch).getHero(heroId),
    getHeroSpells: heroId => new DnDProvider(dispatch).getHeroSpells(heroId),
  }),
)(HeroDetail);
