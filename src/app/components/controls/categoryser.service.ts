import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryList } from './CategoryList';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryserService {
  div: boolean=false;
  productcomponentfunction=new EventEmitter();
  subsVar: Subscription;
  constructor(private httpClient: HttpClient) { }
  getCategories(): Observable<CategoryList[]>  {
    return this.httpClient.get<CategoryList[]>("https://fakestoreapi.com/products/categories");
  }
}
