import { Customer } from './../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { OnInit } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private modalService: BsModalService,
    private formBuilder:FormBuilder,
    private toastService:ToastrService
  ) {}

  customers: Customer[] = [];
  searchKey: string;
  modalRef?: BsModalRef;
  formGroup : FormGroup;
  customerObj : Customer;

  ngOnInit(): void {
    this.getCustomers();
    this.createCustomerAddForm();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }

  createCustomerAddForm(){
    this.formGroup = this.formBuilder.group({
      customerName:[""],
      customerBirthDate:[""],
      customerPhoneNumber:[""],
      customerDescription:[""]
    })
  }

  deleteCustomer(customer:Customer){
    this.customerService.delete(customer).subscribe(respond=>{
      alert("deleted")
      this.getCustomers();
    })
  } 

  add(){
      let customerModel = Object.assign({},this.formGroup.value) 
      this.customerService.add(customerModel).subscribe(response=>{
      })
      this.getCustomers();
    }
   
  
  search() {
    if (this.searchKey == '') {
      this.ngOnInit();
    } else {
      this.customers = this.customers.filter((res) => {
        return (
          res.customerName
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase()) ||
          res.customerPhoneNumber
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase())
        );
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title',
    });
  }
}