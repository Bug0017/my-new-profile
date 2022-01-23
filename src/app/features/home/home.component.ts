import { fetchHeroes } from './../../state/home/home.actions';
import { selectHeroes } from './../../state/home/home.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { homeEnter } from 'src/app/state/home/home.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
})
export class AppHomePageComponent implements OnInit {
  heroes$ = this.store.select(selectHeroes);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(homeEnter());
    this.store.dispatch(fetchHeroes());
  }
}
