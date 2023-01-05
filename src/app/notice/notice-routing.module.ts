import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  {path:'',component:NoticeComponent},
  {path:'notice',component:NoticeComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
