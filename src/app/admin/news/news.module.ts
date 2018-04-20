import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsComponent } from './list-news/list-news.component';
import { SharedModule } from 'app/shared/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListNewsComponent],
  exports: [ListNewsComponent]
})
export class NewsModule { }
