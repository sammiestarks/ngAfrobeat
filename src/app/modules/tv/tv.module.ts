import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvSlabComponent } from './tv-slab/tv-slab.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TvSlabComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    TvSlabComponent
  ]
})
export class TvModule { }
