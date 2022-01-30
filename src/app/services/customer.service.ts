import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Customer[]=[]
  apiUrl = 'https://localhost:44390/api/customers/getall';
  apiUrl1="https://localhost:44390/api/customers/add";
  apiurl2="https://localhost:44390/api/customers/delete";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiUrl);}

    add(customer:Customer){
      return this.httpClient.post(this.apiUrl1,customer);
    }

    delete(customer:Customer){
      return this.httpClient.post(this.apiurl2,customer);
    }
  }

