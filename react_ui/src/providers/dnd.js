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
      console.log('DnDProvider.getHeroes.reject', response.status); // eslint-disable-line no-console
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
      console.log('DnDProvider.getHero.reject', response.status); // eslint-disable-line no-console
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
      console.log('DnDProvider.getHeroSpells.reject', response.status); // eslint-disable-line no-console
    }));
  }

  commitHeroDamage(heroId, damageValue) {
    this.dispatch({
      type: 'PUT_COMMIT_DAMAGE',
    });
    return this.dispatch(dispatch => this.put(`/heroes/${heroId}/damage/`, { damageValue }).then(response => dispatch({
      type: 'PUT_COMMIT_DAMAGE_SUCCESS',
      payload: {
        heroId,
        damageValue: response.data.totalDamage,
        committedDamage: response.data.committedDamage,
      },
    }), (response) => {
      console.log('DnDProvider.commitHeroDamage.reject', response.status); // eslint-disable-line no-console
      this.dispatch({
        type: 'PUT_COMMIT_DAMAGE_FAILURE',
        response,
      });
    }));
  }

  commitHeroHeal(heroId, healValue) {
    this.dispatch({
      type: 'PUT_COMMIT_HEAL',
    });
    return this.dispatch(dispatch => this.put(`/heroes/${heroId}/heal/`, { healValue }).then(response => dispatch({
      type: 'PUT_COMMIT_HEAL_SUCCESS',
      payload: {
        heroId,
        damageValue: response.data.totalDamage,
        committedHeal: response.data.committedHeal,
        healingsUsed: response.data.healingsUsed,
      },
    }), (response) => {
      console.log('DnDProvider.commitHeroHeal.reject', response.status); // eslint-disable-line no-console
      this.dispatch({
        type: 'PUT_COMMIT_HEAL_FAILURE',
        response,
      });
    }));
  }

  commitHeroRest(heroId, restType) {
    this.dispatch({
      type: 'POST_COMMIT_REST',
    });
    return this.dispatch(dispatch => this.post(`/heroes/${heroId}/rest/`, { restType }).then(response => dispatch({
      type: 'POST_COMMIT_REST_SUCCESS',
      payload: {
        ...response.data,
      },
    }), (response) => {
      console.log('DnDProvider.commitHeroRest.reject', response.status); // eslint-disable-line no-console
      this.dispatch({
        type: 'POST_COMMIT_REST_FAILURE',
        response,
      });
    }));
  }
}
