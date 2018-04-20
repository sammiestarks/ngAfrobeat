import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';
import { ListNewsComponent } from 'app/admin/news/list-news/list-news.component';
import { DashboardComponent } from 'app/admin/dashboard/dashboard.component';
// import { ListNewsComponent } from 'app/admin/news/list-news/list-news.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'admin-news',
        component: ListNewsComponent,
      }
    ]
  }
  // {
  //   path: 'admin/news',
  //   component: NewsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
