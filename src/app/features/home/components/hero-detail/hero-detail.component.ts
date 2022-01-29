import { fetchHeroes } from 'src/app/state/home/home.actions';
import { selectHeroById } from 'src/app/state/home/home.selectors';
import { Hero } from 'src/app/state/home/home.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class AppHeroDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {}
  id: number;
  hero: Hero;
  baseUrl = 'https://api.opendota.com';
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(fetchHeroes());
    this.store
      .select(selectHeroById(this.id))
      .subscribe((hero) => (this.hero = hero));
  }
}
