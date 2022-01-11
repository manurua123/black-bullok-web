import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

//Component
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Section1Component } from './component/section1/section1.component';
import { Section2Component } from './component/section2/section2.component';
import { Section3Component } from './component/section3/section3.component';

const rutas: Routes = [
  { path: '', component: UnderConstructionComponent},
  { path: 'h', component: HomeComponent},


];
@NgModule({

  declarations: [
    AppComponent,
    UnderConstructionComponent,
    HomeComponent,
    NavbarComponent,
    Section1Component,
    Section2Component,
    Section3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(rutas),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
