import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs';
import { homeEnter, fetchHeroes } from 'src/app/state/home/home.actions';
import {
  selectHeroes,
  selectHeroesForPagination,
  selectIsLoading,
} from 'src/app/state/home/home.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
})
export class AppHomePageComponent implements OnInit {
  loading$ = this.store.select(selectIsLoading);

  heroes$ = this.store.select(selectHeroes);
  current = 1;
  itemsPerPage = 10;

  filteredHeroes$ = this.store.select(
    selectHeroesForPagination(this.current, this.itemsPerPage)
  );
  totalNoOfPages$ = this.heroes$.pipe(pluck('length'));
  constructor(private store: Store) {}
  baseUrl = 'https://api.opendota.com';
  ngOnInit(): void {
    this.store.dispatch(homeEnter());
    this.store.dispatch(fetchHeroes());
  }

  onPageIndexChange(num: number) {
    this.filteredHeroes$ = this.store.select(
      selectHeroesForPagination(num, this.itemsPerPage)
    );
  }

  onPageSizeChange(num) {
    this.itemsPerPage = num;
    this.filteredHeroes$ = this.store.select(
      selectHeroesForPagination(this.current, this.itemsPerPage)
    );
  }
}
