import { Component, OnInit, Input } from '@angular/core';
import { ProductserService } from 'src/app/components/product/productser.service';
import { ProductList } from 'src/app/components/product/ProductList';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vewprod',
  templateUrl: './vewprod.component.html',
  styleUrls: ['./vewprod.component.scss']
})

export class VewprodComponent implements OnInit {
  
  @Input() id: ProductList;
  constructor(private http: ProductserService, private route: ActivatedRoute, private router: Router) { }
  public productLists: ProductList[] = [];
  ngOnInit(): void {
    
    this.http.getProducts().subscribe((data) => {
      this.productLists = data;
      console.log(data);
    });
    let id = + this.route.snapshot.params['id'];
    this.loadProductDetails(id);
  }
  loadProductDetails(id){
    this.http.getProductById(id).subscribe((product)=>{
      this.productLists=product;
  });
  }

}
