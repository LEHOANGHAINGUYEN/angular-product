import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from "@angular/router"
import { Product } from 'src/app/model/product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  productForm: FormGroup;
  title: string = "Product";
  paramId: number;
  product: Product;
  constructor(private serviceProduct: ProductService, private location: Location, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.paramId = +this.activeRoute.snapshot.paramMap.get('id');
    if (this.paramId === 0) {
      this.title = "Add product id";
    } else {
      this.title = "Edit"
      this.getProduct(this.paramId);
    }
    this.buildForm();
  }

  buildForm() {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      sale: new FormControl(''),
      images: new FormControl('')
    })
  }
  onSubmit() {
    // console.log(this.productForm.value);

    if (this.paramId === 0) {
      this.serviceProduct.addProduct(this.productForm.value).subscribe(data => {
        if (data) {
          this.goBack();
        }
      }
      );
    } else {
      this.serviceProduct.editProduct(this.paramId, this.productForm.value).subscribe(data =>
        this.goBack()
        );
    }

  }

  getProduct(id: number) {
    this.serviceProduct.getProductById(id).subscribe(data => {
      this.productForm.get('name').setValue(data.name);
      this.productForm.get('price').setValue(data.price);
      this.productForm.get('description').setValue(data.description);
      this.productForm.get('sale').setValue(data.sale);
      this.productForm.get('images').setValue(data.images);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
