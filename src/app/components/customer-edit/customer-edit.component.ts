import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Customer } from 'src/app/models/customer';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  id = 0;
  updateCustomerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this.route.params.subscribe((params) => {
      if (params !== null && params !== undefined) {
        if (params['id'] !== undefined) {
          this.id = Number(params['id']);
          this.getCustomerById();
        }
      }
    });
    this.loadModal();
  }

  loadModal() {
    $('#divmodal').modal('show');
    $('#divmodal').on('hidden.bs.modal', () => {
      this.router.navigate(['../customers']);
    });
  }

  getCustomerById() {
    this.customerService.getById(this.id).subscribe(
      (response) => {
        const customerModel = <Customer>response;
        this.updateCustomerForm = this.formBuilder.group({
          id: [customerModel.id, Validators.required],
          customerName: [customerModel.customerName, Validators.required],
          customerPhoneNumber: [
            customerModel.customerPhoneNumber,
            Validators.required,
          ],
          customerBirthDate: [
            customerModel.customerBirthDate,
            Validators.required,
          ],
          customerDescription: [
            customerModel.customerDescription,
            Validators.required,
          ],
        });
      },
      (error) => {
        this.toastr.error('Kayıt İşlemi Sırasında Bir Hata Oluştu', 'Customer');
      }
    );
  }

  submit() {
    if (this.updateCustomerForm.valid) {
      this.update();
    }
  }

  update() {
    let customerModel: Customer = Object.assign(
      {},
      this.updateCustomerForm.value
    );
    customerModel.id = this.id;
    this.customerService.update(customerModel).subscribe((response) => {
      $('#divmodal').modal('hide');
    });
  }
}
