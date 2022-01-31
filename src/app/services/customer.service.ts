import { Customer } from './../models/customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [];
  apiUrl = 'https://localhost:44390/api/customers/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(search: string): Observable<Customer[]> {
    let params: HttpParams = new HttpParams();
    params = params.set('search', search);
    return this.httpClient.get<Customer[]>(this.apiUrl, { params: params });
  }

  add(customer: Customer) {
    return this.httpClient.post(this.apiUrl, customer);
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiUrl, {
      params: new HttpParams().set('Id', id.toString()),
    });
  }

  update(customer: Customer) {
    return this.httpClient.put(this.apiUrl, customer);
  }
}
