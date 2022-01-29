import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectHome = createFeatureSelector('home');
export const selectHeroes = createSelector(
  selectHome,
  (state: any) => state.heroes
);

export const selectHeroesForPagination = (
  currentPage: number,
  numberOfItem?: number
) => {
  const sliceFirstParam = (currentPage - 1) * numberOfItem;
  return createSelector(selectHeroes, (heroes) => {
    return heroes.slice(sliceFirstParam, numberOfItem * currentPage);
  });
};
export const selectIsLoading = createSelector(
  selectHome,
  (state: any) => state.isLoading
);

export const selectHeroById = (id) =>
  createSelector(selectHeroes, (heroes) => {
    debugger;
    return heroes.find((hero) => hero.id === id);
  });
