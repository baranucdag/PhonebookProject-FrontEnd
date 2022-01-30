import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ToastrService } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
