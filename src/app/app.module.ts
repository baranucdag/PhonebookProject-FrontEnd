import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NaviComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
