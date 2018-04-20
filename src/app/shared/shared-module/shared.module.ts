import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from './../../typescripts/free';
import { MDBBootstrapModulePro } from './../../typescripts/pro/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './../../shared/header/header.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    NgbModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    MDBBootstrapModule,
    MDBBootstrapModulePro,
    NgbModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent
  ],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
