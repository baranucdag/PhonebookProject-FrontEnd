import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

declare var $: any;

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  id = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
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
    console.log($('#divmodal'));
    $('#divmodal').modal('show');
    $('#divmodal').on('hidden.bs.modal', () => {
      this.router.navigate(['../customers']);
    });
  }

  getCustomerById() {}

  submit() {
    //valid
  }

  // update() {
  //   this.customerService.update(null).subscribe((response) => {
  //     $('#divmodal').modal('hide');
  //   });
  // }
}
