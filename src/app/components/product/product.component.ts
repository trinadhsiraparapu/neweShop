import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductserService } from './productser.service';
import { ProductList } from './ProductList';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title = 'eShop';
  breakpoint: number;
  ngVersion: string = VERSION.full;
  public productLists: ProductList[] = [];
  constructor(private http: ProductserService) { }

  ngOnInit() {

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.http.getProducts().subscribe((data) => {
      this.productLists = data;
    });

  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;

  }

}
