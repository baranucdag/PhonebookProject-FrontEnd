import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  search = '';

  list: Customer[] = [];

  // searchTextSubject = new Subject<void>();

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    // this.loadSearchInputs();
    this.getList();
  }

  // loadSearchInputs() {
  //   const observableText = this.searchTextSubject
  //     .pipe(debounceTime(1000))
  //     .subscribe(() => {
  //       this.getList();
  //     });
  // }

  // search() {
  //   this.searchTextSubject.next();
  // }

  getList() {
    this.customerService
      .getCustomers(this.search)
      .subscribe(
        (response) => {
          this.list = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteCustomer(id: number) {
    console.log(id);
  }
}
