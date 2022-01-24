import { HomeActionTypes } from './home.action-types';
import { createAction, props } from '@ngrx/store';
import { Hero } from './home.model';

export const homeEnter = createAction(HomeActionTypes.HOME_ENTER);
export const fetchHeroes = createAction(HomeActionTypes.FETCH_HEROES);
export const fetchHeroesSuccess = createAction(
  HomeActionTypes.FETCH_HEROES_SUCCESS,
  props<{ heroes: Hero[] }>()
);

export const fetchHeroesFailure = createAction(
  HomeActionTypes.FETCH_HEROES_FAILURE,
  props<{ error }>()
);
