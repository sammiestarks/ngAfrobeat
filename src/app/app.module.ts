import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { MDBSpinningPreloader } from './typescripts/pro/index';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BaseComponent } from './base/base.component';

import { FooterComponent } from './shared/footer/footer.component';


import { NewsModule } from 'app/modules/news/news.module';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

    FooterComponent,

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
    NewsModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
