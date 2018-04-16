import { RouterModule } from '@angular/router';
import { BaseComponent } from 'app/base/base.component';
import { NgModule } from '@angular/core';


const routes = RouterModule.forRoot([
  {
    path: '',
    component: BaseComponent,
    pathMatch: 'full'
  },

  // { path: "", redirectTo: "/heroes", pathMatch: "full" },
  // { path: "**", component: NotFoundComponent }
]);

@NgModule({
  imports: [routes],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
