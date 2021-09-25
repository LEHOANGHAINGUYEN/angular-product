import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get('http://5cac4cb9c85e05001452f1fc.mockapi.io/api/v1/Product').pipe(map(response => response));
  }

  getProductById(id: number):  Observable<any>{
     return this.http.get(`http://5cac4cb9c85e05001452f1fc.mockapi.io/api/v1/Product/${id}`).pipe(map(response => response));
  }
 
  addProduct(body: any){
    return this.http.post('http://5cac4cb9c85e05001452f1fc.mockapi.io/api/v1/Product',body).pipe(map(response => response));
  }

  editProduct(id: number,body: any){
    return this.http.put(`http://5cac4cb9c85e05001452f1fc.mockapi.io/api/v1/Product/${id}`,body).pipe(map(response => response));
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`http://5cac4cb9c85e05001452f1fc.mockapi.io/api/v1/Product/${id}`).pipe(map(response => response));
  }
}
