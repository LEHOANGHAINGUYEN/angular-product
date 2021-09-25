import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/mock-product';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  paramId: number;
  product: Product;
  constructor(
    private activeRoute: ActivatedRoute,
    private productSevice: ProductService
  ) { }

  ngOnInit() {
    this.paramId = +this.activeRoute.snapshot.paramMap.get('id');
    this.getDetailProduct(this.paramId);
  }
  getDetailProduct(id: number) {
    this.productSevice.getProductById(id).subscribe(productdetail =>
      this.product = productdetail
    )
  }

  
}
