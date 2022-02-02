import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.createCustomerAddForm();
    this.loadModal();
  }

  loadModal() {
    $('#divmodal').modal('show');
    $('#divmodal').on('hidden.bs.modal', () => {
      this.router.navigate(['../customers']);
    });
  }

  add() {
    let customerModel = Object.assign({}, this.formGroup.value);
    this.customerService.add(customerModel).subscribe(
      (response) => {
        this.toastr.success('Kayıt Tamamlandı', 'Customer');
        $('#divmodal').modal('hide');
      },
      (error) => {
        this.toastr.error('Kayıt İşlemi Sırasında Bir Hata Oluştu', 'Customer');
      }
    );
  }

  createCustomerAddForm() {
    this.formGroup = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerBirthDate: ['', Validators.required],
      customerPhoneNumber: ['', Validators.required],
      customerDescription: ['', Validators.required],
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.add();
    } else {
    }
  }
}
