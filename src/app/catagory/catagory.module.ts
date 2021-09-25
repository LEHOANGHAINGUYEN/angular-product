import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatagoryRoutingModule } from './catagory-routing.module';
import { CatogoryDetailComponent } from './catagory-detail/catagory-detail.component';
import { CatagoryListComponent } from './catagory-list/catagory-list.component';

@NgModule({
  declarations: [
    CatogoryDetailComponent,
    CatagoryListComponent
  ],
  imports: [
    CommonModule,
    CatagoryRoutingModule
  ]
})
export class CatagoryModule { }
