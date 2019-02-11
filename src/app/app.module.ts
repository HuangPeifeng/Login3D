import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Login3dComponent } from './login3d/login3d.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    Login3dComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
