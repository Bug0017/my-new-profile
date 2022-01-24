import { AppHomePageComponent } from './features/home/components/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHeroDetailComponent } from './features/home/components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },

  {
    path: 'home',
    component: AppHomePageComponent,
  },

  {
    path: 'hero/:id',
    component: AppHeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
