import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/product',pathMatch:'full'},
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'catagory', loadChildren: './catagory/catagory.module#CatagoryModule' },
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
