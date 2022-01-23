import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectHome = createFeatureSelector('home');
export const selectHeroes = createSelector(
  selectHome,
  (state: any) => state.heroes
);
