import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'customers' },
  {
    path: 'customers',
    component: CustomerListComponent,
    children: [
      { path: 'add', component: CustomerAddComponent },
      { path: ':id/edit', component: CustomerEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
