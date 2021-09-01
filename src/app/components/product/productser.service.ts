import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './ProductList';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProductserService {
  url = "https://fakestoreapi.com/products"
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>(this.url);
  }
}
