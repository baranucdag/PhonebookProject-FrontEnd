import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService:CustomerService) {}
  customers:Customer[]=[]
  searchKey:string;

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response
    })
  }
  search(){
    if(this.searchKey==""){
      this.ngOnInit();
    }else{
      this.customers=this.customers.filter(res=>{
        return res.customerName.toLocaleLowerCase().match(this.searchKey.toLocaleLowerCase())
      })
    }
  }

}
