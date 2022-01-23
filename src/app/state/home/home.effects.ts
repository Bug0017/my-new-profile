import { AppHomeService } from './../../features/home/services/home.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HomeActions from './home.actions';
import { mergeMap, map, EMPTY, catchError } from 'rxjs';
@Injectable()
export class HeroesEffects {
  constructor(private action$: Actions, private homeService: AppHomeService) {}

  fetchHeroes$ = createEffect(() =>
    this.action$.pipe(
      ofType(HomeActions.fetchHeroes),
      mergeMap(() =>
        this.homeService.fetchHeroes().pipe(
          map((heroes: any) => HomeActions.fetchHeroesSuccess({ heroes })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
