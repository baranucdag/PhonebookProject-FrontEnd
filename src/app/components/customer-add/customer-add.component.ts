import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private customerService:CustomerService) { }

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

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value) 
      this.customerService.add(customerModel).subscribe(response=>{
      })
    }else{
    }
   
  }
}
