import { AppContactPageComponent } from './pages/contact/contact.component';
import { AppSkillsPageComponent } from './pages/skills/skills.component';
import { AppHomePageComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'skills',
    component: AppSkillsPageComponent,
  },

  {
    path: 'contact',
    component: AppContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
