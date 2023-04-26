import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

//Component
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';
import { HomeComponent } from './component/home/home.component';
import { CaracteristicasComponent } from './component/caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [AppComponent, UnderConstructionComponent,HomeComponent,CaracteristicasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
