import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { homeEnter, fetchHeroes } from 'src/app/state/home/home.actions';
import {
  selectHeroes,
  selectIsLoading,
} from 'src/app/state/home/home.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
})
export class AppHomePageComponent implements OnInit {
  loading$ = this.store.select(selectIsLoading);
  heroes$ = this.store.select(selectHeroes);
  constructor(private store: Store) {}
  baseUrl = 'https://api.opendota.com';
  ngOnInit(): void {
    this.store.dispatch(homeEnter());
    this.store.dispatch(fetchHeroes());
  }
}
