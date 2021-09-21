import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './ProductList';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProductserService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>("https://fakestoreapi.com/products");
  }
  getproductbycat(categories): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>("https://fakestoreapi.com/products/category/" + categories);
  }
  getProductById(id): Observable<ProductList[]> {
    return this.httpClient.get<ProductList[]>("https://fakestoreapi.com/products/" + id);
  }
}
