import { Component, OnInit, Input, VERSION, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductserService } from './productser.service';
import { ProductList } from './ProductList';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryserService } from 'src/app/components/controls/categoryser.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() categories: string;

  title = 'eShop';
  breakpoint: number;
  ngVersion: string = VERSION.full;
  public productLists: ProductList[] = [];
  constructor(private http: ProductserService, private router: Router, private cs: CategoryserService) { }
  category: any;
  selectedProduct:ProductList;
  ngOnInit() {

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.http.getProducts().subscribe((data) => {
      this.productLists = data;
    });
    this.getproductcat(this.categories);

  }

  onNotified(categories: string) {
    this.categories = categories;
    this.getproductcat(this.categories);
  }
  getproductcat(categories) {
    this.http.getproductbycat(categories).subscribe((res) => {
      this.productLists = res;
    })
  }
   oneditProd(product: ProductList){
    this.selectedProduct=product;
    const navigationDetails: string[] = ['/update/' + product.id];
    
        this.router.navigate(navigationDetails);
  }
  onselectitem(product: ProductList) {
    this.selectedProduct=product;
    const navigationDetails: string[] = ['/view/' + product.id];
    
        this.router.navigate(navigationDetails);
        this.router.navigate(['/view',product.id]);
        
  }
  
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;

  }
}
