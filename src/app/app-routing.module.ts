import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

export const routes: Routes = [
  // {path: "", component: HomePageComponent},
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: HomePageComponent },
  { path: 'countries/:countryName/detail', component: DetailPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
