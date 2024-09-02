import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { HttpClientModule } from '@angular/common/http';
import { portadaComponent } from './component/01_portada/01_portada.component';
import { serviciosComponent } from './component/02_servicios/02_servicios.component';
import { nosotrosComponent } from './component/03_nosotros/03_nosotros.component';
import { contactoComponent } from './component/04_contacto/04_contacto.component';
import { footerComponent } from './component/05_footer/05_footer.component';
import { UnderConstructionComponent } from './component/00_under-construction/under-construction.component';
import { PortfolioComponent } from './component/07_portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/00_home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    portadaComponent,
    serviciosComponent,
    nosotrosComponent,
    contactoComponent,
    footerComponent,
    PortfolioComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
