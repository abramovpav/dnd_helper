import DataProvider from './data-provider';

export default class DnDProvider extends DataProvider {
  getHeroes() {
    this.dispatch({
      type: 'GET_HEROES',
    });
    return this.dispatch(dispatch => this.get('/heroes/').then(response => dispatch({
      type: 'GET_HEROES_SUCCESS',
      payload: response.data,
    }), (response) => {
      console.log('DnDProvider.getHeroes.reject', response.status);
    }));
  }

  getHero(heroId) {
    this.dispatch({
      type: 'GET_HERO',
    });
    return this.dispatch(dispatch => this.get(`/heroes/${heroId}/`).then(response => dispatch({
      type: 'GET_HERO_SUCCESS',
      payload: response.data,
    }), (response) => {
      console.log('DnDProvider.getHero.reject', response.status);
    }));
  }

  getHeroSpells(heroId) {
    this.dispatch({
      type: 'GET_HERO_SPELLS',
    });
    return this.dispatch(dispatch => this.get(`/heroes/${heroId}/spells/`).then(response => dispatch({
      type: 'GET_HERO_SPELLS_SUCCESS',
      payload: {
        heroId,
        spells: response.data,
      },
    }), (response) => {
      console.log('DnDProvider.getHeroSpells.reject', response.status);
    }));
  }
}
