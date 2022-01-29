import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      customerName:["",Validators.required],
      customerBirthDate:["",Validators.required],
      customerPhoneNumber:["",Validators.required],
      customerDescription:["",Validators.required]
    })
  }
}
