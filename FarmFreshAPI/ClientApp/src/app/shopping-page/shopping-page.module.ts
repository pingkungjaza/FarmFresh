import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingPageRoutingModule } from './shopping-page-routing.module';
import { ShoppingPageComponent } from './shopping-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalProductDetailComponent } from './modal-product-detail/modal-product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ShoppingPageComponent,
    NavbarComponent,
    ShoppingListComponent,
    ModalProductDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ShoppingPageRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class ShoppingPageModule { }
