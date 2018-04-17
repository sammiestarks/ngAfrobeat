import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared-module/shared.module';

import { NewspageComponent } from './newspage/newspage.component';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { TvpageComponent } from './tvpage/tvpage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { CelebpageComponent } from './celebpage/celebpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IreportpageComponent } from './ireportpage/ireportpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { NewsModule } from 'app/modules/news/news.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsModule,
  ],
  declarations: [
    NewspageComponent,
     MusicpageComponent,
     TvpageComponent,
     EventpageComponent,
     CelebpageComponent,
     HomepageComponent,
     IreportpageComponent,
     DetailpageComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
