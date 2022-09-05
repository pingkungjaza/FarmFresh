import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/menu.service';
import { ProductService } from 'src/app/shared/product-detail.service';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(public menuService: MenuService, public productService: ProductService, public searchService: SearchService) { }

  page: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductList(this.page)
      .subscribe((response: any) => {
        this.productService.product_list = response.productDetailList;
        this.total = response.total;
      });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getProducts();
  }

  clickedOutsideMenu(): void {
    this.menuService.menu_list.map(e => e.isMenuOpened = false);
  }

}
