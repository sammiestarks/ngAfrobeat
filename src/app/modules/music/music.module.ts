import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MusicCarouselComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    MusicCarouselComponent
  ]
})
export class MusicModule { }
