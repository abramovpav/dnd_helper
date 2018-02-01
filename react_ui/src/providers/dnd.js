import DataProvider from './data-provider';

export default class DnDProvider extends DataProvider {
  getHeroes() {
    this.dispatch({
      type: 'GET_HEROES',
    });
    this.dispatch(dispatch => this.get('/heroes/').then((response) => {
      dispatch({
        type: 'GET_HEROES_SUCCESS',
        payload: response.data,
      });
    }, (response) => {
      console.log('DnDProvider.getHeroes.reject', response.status);
    }));
  }

  getHero(heroId) {
    this.dispatch({
      type: 'GET_HERO',
    });
    this.dispatch(dispatch => this.get(`/heroes/${heroId}`).then((response) => {
      dispatch({
        type: 'GET_HERO_SUCCESS',
        payload: response.data,
      });
    }, (response) => {
      console.log('DnDProvider.getHero.reject', response.status);
    }));
  }
}
