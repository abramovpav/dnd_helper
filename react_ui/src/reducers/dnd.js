const initialState = {heroes: []};

export default function(state=initialState, action) {
  switch(action.type) {
    case 'GET_HEROES_SUCCESS':
      return {
        ...state,
        heroes: action.payload
      };
    default:
      return state;
  }
};


