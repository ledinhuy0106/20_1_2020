import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListHomeComponent} from "./component/list-home/list-home.component";
import {CreateHomeComponent} from "./component/create-home/create-home.component";
import {EditComponent} from "./component/edit/edit.component";

const routes: Routes = [
  {
    path:"",
    component:ListHomeComponent
  },
  {
    path:"create",
    component:CreateHomeComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
