import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebListComponent } from './celeb-list/celeb-list.component';
import { SpotlightCelebsComponent } from './spotlight-celebs/spotlight-celebs.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CelebListComponent, SpotlightCelebsComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    CelebListComponent, SpotlightCelebsComponent
  ]
})
export class CelebModule { }
