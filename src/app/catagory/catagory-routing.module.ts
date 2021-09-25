import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatagoryListComponent } from './catagory-list/catagory-list.component';
import { CatogoryDetailComponent } from './catagory-detail/catagory-detail.component';

const routes: Routes = [
  { path: '', component: CatagoryListComponent },
  { path: 'catagorydetail', component: CatogoryDetailComponent }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatagoryRoutingModule { }
