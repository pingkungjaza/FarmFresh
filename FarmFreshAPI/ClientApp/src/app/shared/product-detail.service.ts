import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProductDetail } from './product-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  showModal: boolean = false;

  constructor(private http: HttpClient) { }

  readonly baseURL = `${environment.apiUrl}/api/ProductDetail`;
  product: ProductDetail = new ProductDetail();
  product_list: ProductDetail[] = [];

  getProductList(page?: number) {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("jwt"));

    const httpOptions = {
      headers: headers_object
    };

    return this.http.get(this.baseURL + "/product?page=" + (page ? page?.toString() : "1"), httpOptions)
  }

  toggleShowModal(productId?: number) {
    const finedProduct = this.product_list!.filter(e => e.productId === productId)[0];

    if (finedProduct != undefined) {
      this.product = finedProduct;
    }

    this.showModal = !this.showModal;
  }
}
