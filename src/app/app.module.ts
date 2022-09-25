import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
// import { NgxBarcode6Module } from 'ngx-barcode6';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxBarcode6Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
