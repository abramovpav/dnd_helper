import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class HeroDetail extends Component {

  constructor(props) {
    super(props);
    this.id = parseInt(props.match.params.id);
    const hero = this.getHero(props);

    this.state = {
      hero: hero
    }
  }

  componentWillReceiveProps(nextProps) {
    const hero = this.getHero(nextProps);
    this.setState({hero: hero});
  }

  getHero(props) {
    const {heroes} = props;
    return heroes.find((hero) => hero.id === this.id) || {};
  }

  render() {
    const {hero} = this.state;
    return (
      <div className="page-container hero-detail">
        <div className="page-header">Hero's Profile</div>
        <div className="page-content">
          <div className="general-data">
            <div className="hero-avatar"><div className="fake-hero-avatar big"/></div>
            <div className="general-info">
              <div className="name text">{hero.first_name} {hero.last_name}</div>
              <div className="text">Age: <span className="number">{hero.age}</span></div>
              <div className="text">Weight: <span  className="number">{hero.weight}</span></div>

            </div>
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
    // DnDProvider: new DnDProvider(dispatch)
  })
)(HeroDetail);
