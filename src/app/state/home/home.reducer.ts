import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
const homeInitialState = {
  heroes: [],
  isLoading: false,
  hasError: false,
  errors: {
    fetchHeroes: {},
  },
};

export const homeReducer = createReducer(
  homeInitialState,
  on(HomeActions.homeEnter, (state) => ({ ...state })),
  on(HomeActions.fetchHeroes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(HomeActions.fetchHeroesSuccess, (state, { heroes }) => ({
    ...state,
    isLoading: false,
    heroes: [...heroes],
  })),
  on(HomeActions.fetchHeroesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    hasError: true,
    errors: {
      ...state.errors,
      fetchHeroes: {
        ...state.errors.fetchHeroes,
        ...error,
      },
    },
  }))
);
