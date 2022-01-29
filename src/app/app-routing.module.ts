import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CustomerComponent},
  {path:"customers",component:CustomerComponent},
  {path:"customers/add",component:CustomerAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
