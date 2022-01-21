import { AppStateModule } from './state/app-state.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCodeEditorModule } from './features/code-editor/code-editor.module';
import { AppTerminalModule } from './features/terminal/terminal.module';
import { AppHomePageComponent } from './pages/home/home.component';
import { AppSkillsPageComponent } from './pages/skills/skills.component';
import { AppContactPageComponent } from './pages/contact/contact.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AppHomePageComponent,
    AppSkillsPageComponent,
    AppContactPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStateModule,
    AppCodeEditorModule,
    AppTerminalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
