import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product-detail.service';

@Component({
  selector: 'app-modal-product-detail',
  templateUrl: './modal-product-detail.component.html',
  styleUrls: ['./modal-product-detail.component.css']
})

export class ModalProductDetailComponent implements OnInit {
  showMore: boolean = false;
  qtyList: number[] = new Array();

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  getQtyList() {
    this.qtyList = new Array();

    for (let i = 0; i < this.productService.product.productQty; i++) {
      this.qtyList.push(i + 1);
    }

    return this.qtyList;
  }
}
