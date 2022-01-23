import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from 'src/app/features/shared/components/header/app-header.component';
import { AppFooterComponent } from 'src/app/features/shared/components/footer/app-footer.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule],
  declarations: [AppHeaderComponent, AppFooterComponent],
  exports: [AppHeaderComponent, AppFooterComponent],
})
export class AppFeaturesSharedModule {}
