import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { OnInit } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
    private formBuilder:FormBuilder
  ) {}

  customers: Customer[] = [];
  searchKey: string;
  modalRef?: BsModalRef;
  customerAddForm : FormGroup;

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
    this.customerAddForm = this.formBuilder.group({
      customerName:["",Validators.required],
      customerBirthDate:["",Validators.required],
      customerPhoneNumber:["",Validators.required],
      customerDescription:["",Validators.required]
    })
  }

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value) 
      this.customerService.add(customerModel).subscribe(response=>{
      })
    }else{
    }
   
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
