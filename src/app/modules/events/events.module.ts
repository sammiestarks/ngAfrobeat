import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsSlideComponent } from './events-slide/events-slide.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EventsSlideComponent],
  exports: [EventsSlideComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EventsModule { }
