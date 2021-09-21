import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductserService } from 'src/app/components/product/productser.service';
import { Router } from '@angular/router';
import { ProductList } from 'src/app/components/product/ProductList';
@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.scss']
})

export class NewprodComponent implements OnInit {
  
  public productLists: ProductList[] = [];
  constructor(private http: ProductserService, private router: Router) { }
  
  public dataTable: any;
  ngOnInit(): void { 
  }
}
