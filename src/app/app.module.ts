import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModeIconComponent } from './components/mode-icon/mode-icon.component';
import { MaterialModule } from './material/material.module';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchByNamePipe } from './shared/pipes';
import {
  HighlightTextDirective,
  MoveRightDirective,
  MoveDownDirective,
} from './shared/directives';
import { ButtonComponent } from './components/button/button.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WrapperPagesComponent } from './components/wrapper-pages/wrapper-pages.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    ModeIconComponent,
    InputComponent,
    SelectComponent,
    LayoutComponent,
    CardCountryComponent,
    SearchByNamePipe,
    HighlightTextDirective,
    DetailPageComponent,
    ButtonComponent,
    NotFoundComponent,
    MoveRightDirective,
    MoveDownDirective,
    LoginPageComponent,
    WrapperPagesComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
