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

import { HttpClientModule } from '@angular/common/http';
import { portadaComponent } from './component/01_portada/01_portada.component';
import { serviciosComponent } from './component/02_servicios/02_servicios.component';
import { nosotrosComponent } from './component/03_nosotros/03_nosotros.component';
import { contactoComponent } from './component/04_contacto/04_contacto.component';
import { footerComponent } from './component/05_footer/05_footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    portadaComponent,
    serviciosComponent,
    nosotrosComponent,
    contactoComponent,
    footerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
