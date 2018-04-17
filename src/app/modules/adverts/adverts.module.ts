import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsSquareAComponent } from './adverts-square-a/adverts-square-a.component';
import { AdvertsRectAComponent } from './adverts-rect-a/adverts-rect-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdvertsSquareAComponent, AdvertsRectAComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    AdvertsSquareAComponent, AdvertsRectAComponent
  ]
})
export class AdvertsModule { }
