import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryList } from './CategoryList';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class CategoryserService {
  url = "https://fakestoreapi.com/products/categories"
  constructor(private httpClient: HttpClient) { }
  getCategories(): Observable<CategoryList[]> {
    return this.httpClient.get<CategoryList[]>(this.url);
  }
}
