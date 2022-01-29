import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService:CustomerService) {}
  customers:Customer[]=[]
  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response
    })
  }

}
