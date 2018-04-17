import { RouterModule } from '@angular/router';
import { BaseComponent } from 'app/base/base.component';
import { NgModule } from '@angular/core';
import { HomepageComponent } from 'app/pages/homepage/homepage.component';
import { NewspageComponent } from 'app/pages/newspage/newspage.component';
import { MusicpageComponent } from 'app/pages/musicpage/musicpage.component';
import { TvpageComponent } from 'app/pages/tvpage/tvpage.component';
import { EventpageComponent } from 'app/pages/eventpage/eventpage.component';
import { CelebpageComponent } from 'app/pages/celebpage/celebpage.component';
import { IreportpageComponent } from 'app/pages/ireportpage/ireportpage.component';
import { DetailpageComponent } from 'app/pages/detailpage/detailpage.component';


const routes = RouterModule.forRoot([
  {
    path: '',
    component: BaseComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'newspage',
        component: NewspageComponent
      },
      {
        path: 'musicpage',
        component: MusicpageComponent
      },
      {
        path: 'tvpage',
        component: TvpageComponent
      },
      {
        path: 'eventpage',
        component: EventpageComponent
      },
      {
        path: 'celebpage',
        component: CelebpageComponent
      },
      {
        path: 'ireportpage',
        component: IreportpageComponent
      },
      {
        path: 'detailpage',
        component: DetailpageComponent
      },
      // { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
  }



  // { path: "**", component: NotFoundComponent }
]);

@NgModule({
  imports: [routes],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
