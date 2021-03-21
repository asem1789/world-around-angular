import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';

export const routes: Routes = [
  // {path: "", component: HomePageComponent},
  {path: "", redirectTo: "/countries", pathMatch: 'full'},
  {path: "countries", component: HomePageComponent},
  {path: "countries/:countryName/detail", component: DetailPageComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
