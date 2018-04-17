import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { MDBSpinningPreloader } from './typescripts/pro/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';

import { SharedModule } from 'app/shared/shared-module/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AppRoutingModule,
    SharedModule,
    PagesModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
