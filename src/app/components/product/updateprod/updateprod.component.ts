import { Component, OnInit, Input } from '@angular/core';
import { ProductserService } from 'src/app/components/product/productser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductList } from 'src/app/components/product/ProductList';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.scss']
})
export class UpdateprodComponent implements OnInit {

  constructor(private http: ProductserService, private route: ActivatedRoute, private router: Router) { }
  @Input() id: ProductList;
  public productLists: ProductList[] = [];
  ngOnInit(): void {
    let id = + this.route.snapshot.params['id'];
    this.loadProductDetails(id);
  }
  loadProductDetails(id){
    this.http.getProductById(id).subscribe((product)=>{this.productLists=product;
  });
  }
}
