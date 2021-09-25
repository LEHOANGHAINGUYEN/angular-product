import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-product';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
 this.getData();
  }
  getData() {
    this.productService.getProduct().subscribe(product => this.products = product);
  }

  deleteDate(id: number){
    this.productService.deleteProduct(id).subscribe(product => {
      this.getData();
    });
  }
}
