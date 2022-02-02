import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  search = '';

  list: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.customerService.getCustomers(this.search).subscribe(
      (response) => {
        this.list = response;
      },
      (error) => {
        console.log(error);
        this.toastr.error('Listeleme Sırasında Bir Hata Oluştu', 'Customer');
      }
    );
  }

  deleteCustomer(customer: Customer) {
    this.customerService.delete(customer).subscribe(
      response => {
        this.toastr.success('Kayıt Tamamlandı', 'Customer');
        this.getList();
      },
      error => {
        this.toastr.error('Kayıt İşlemi Sırasında Bir Hata Oluştu', 'Customer');
      }
    );
  }
}
