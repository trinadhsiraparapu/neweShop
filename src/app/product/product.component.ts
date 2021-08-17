import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title = 'eShop';
  breakpoint: number;
  ngVersion: string = VERSION.full;
  constructor() { }
  
    ngOnInit() {
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    }
    onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    }

}
