import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from './../../typescripts/free';
import { MDBBootstrapModulePro } from './../../typescripts/pro/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './../../shared/header/header.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    NgbModule.forRoot(),
  ],
  declarations: [HeaderComponent],
  exports: [
    MDBBootstrapModule,
    MDBBootstrapModulePro,
    NgbModule,
    BrowserAnimationsModule,
    HeaderComponent
  ],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
