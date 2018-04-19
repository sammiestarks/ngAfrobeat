import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SharedModule } from '../../shared/shared-module/shared.module';
import { NewsPageListComponent } from './news-page-list/news-page-list.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NewsCarouselComponent, NewsListComponent, NewsDetailsComponent, NewsPageListComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    NewsCarouselComponent, NewsListComponent, NewsDetailsComponent
  ]
})
export class NewsModule { }
