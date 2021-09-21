import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VewprodComponent} from './components/product/vewprod/vewprod.component';
import {NewprodComponent} from 'src/app/components/product/newprod/newprod.component';
import {UpdateprodComponent} from './components/product/updateprod/updateprod.component';
import { HeaderComponent } from './components/header/header.component';
const routes: Routes = [
  {path: '',  component: HeaderComponent},
  {path: 'newprod', component: NewprodComponent},
  {path: 'update/:id', component: UpdateprodComponent},
  {path: 'view/:id',component:VewprodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HeaderComponent,NewprodComponent,UpdateprodComponent,VewprodComponent]
