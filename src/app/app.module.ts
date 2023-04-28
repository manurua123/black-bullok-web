import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';
import { HomeComponent } from './component/home/home.component';
import { CaracteristicasComponent } from './component/caracteristicas/caracteristicas.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    HomeComponent,
    CaracteristicasComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
