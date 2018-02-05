const initialState = { heroes: { objects: {} } };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_HERO':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          loading: true,
        },
      };
    case 'GET_HEROES':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          loading: true,
        },
      };
    case 'GET_HERO_SPELLS':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          loading: true,
        },
      };
    case 'GET_HEROES_SUCCESS':
      return {
        ...state,
        heroes: {
          loading: false,
          objects: action.payload.reduce((heroes, hero) => {
            heroes[hero.id] = hero; // eslint-disable-line no-param-reassign
            return heroes;
          }, {}),
        },
      };
    case 'GET_HERO_SUCCESS':
      return {
        ...state,
        heroes: {
          loading: false,
          objects: {
            ...state.heroes.objects,
            [action.payload.id]: action.payload,
          },
        },
      };
    case 'GET_HERO_SPELLS_SUCCESS':
      return {
        ...state,
        heroes: {
          loading: false,
          objects: {
            ...state.heroes.objects,
            [action.payload.heroId]: {
              ...state.heroes.objects[action.payload.heroId],
              spells: action.payload.spells,
            },
          },
        },
      };
    case 'PUT_COMMIT_DAMAGE_SUCCESS':
      return {
        ...state,
        heroes: {
          loading: false,
          objects: {
            ...state.heroes.objects,
            [action.payload.heroId]: {
              ...state.heroes.objects[action.payload.heroId],
              damageTaken: action.payload.damageValue,
            },
          },
        },
      };
    default:
      return state;
  }
}

