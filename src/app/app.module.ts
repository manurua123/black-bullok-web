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
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceSectionComponent } from './component/service-section/service-section.component';
import { HomeSectionComponent } from './component/home-section/home-section.component';
import { MediaSectionComponent } from './component/media-section/media-section.component';
const rutas: Routes = [
  { path: '', component: UnderConstructionComponent},
  { path: 'construction', component: UnderConstructionComponent},

];
@NgModule({

  declarations: [
    AppComponent,
    UnderConstructionComponent,
    NavbarComponent,
    ContactComponent,
    ServiceSectionComponent,
    HomeSectionComponent,
    MediaSectionComponent
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
