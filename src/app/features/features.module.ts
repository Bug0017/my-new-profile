import { NgModule } from '@angular/core';
import { AppFeaturesSharedModule } from 'src/app/features/shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [AppFeaturesSharedModule, HomeModule],
  exports: [AppFeaturesSharedModule, HomeModule],
})
export class AppFeaturesModule {}
