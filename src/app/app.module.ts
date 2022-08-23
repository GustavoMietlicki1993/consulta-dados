import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultasModuleModule } from './modules/consultas-module/consultas-module.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsultasModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
