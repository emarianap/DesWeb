import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppToutingModule } from 'src/assets/app.routes';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio/inicio.component';
import { AboutComponent } from './componentes/About/about/about.component';
import { FooterComponent } from './componentes/footer/footer/footer.component';
import { GaleriaComponent } from './componentes/galeria/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto/contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    FooterComponent,
    GaleriaComponent,
    ContactoComponent,
    ServiciosComponent,

],
  imports: [
    BrowserModule,
    AppToutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
