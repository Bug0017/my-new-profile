import { AppHomePageComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
@NgModule({
  imports: [CommonModule, NzCardModule],
  declarations: [AppHomePageComponent],
})
export class HomeModule {}
