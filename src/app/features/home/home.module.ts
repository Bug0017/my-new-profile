import { AppHeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';
import { AppHomePageComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [CommonModule, NzCardModule, NzButtonModule, RouterModule],
  declarations: [AppHomePageComponent, AppHeroDetailComponent],
})
export class HomeModule {}
