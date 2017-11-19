import DataProvider from "./data-provider";

export default class DnDProvider extends DataProvider {

  getHeroes()  {
    this._dispatch((dispatch) => {
      return this.get('/heroes/').then(
        response => {
          dispatch({
            type: 'GET_HEROES_SUCCESS',
            payload: response.data
          });
        }, response => {
          console.log('DnDProvider.getHeroes.reject', response.status)
        }
      )
    })
  }
}
