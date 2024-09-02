import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './component/07_portfolio/portfolio.component';
import { HomeComponent } from './component/00_home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
