import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionalPageRoutingModule } from './promotional-page-routing.module';
import { PromotionalPageComponent } from './promotional-page.component';
import { BannerComponent } from './banner/banner.component';
import { PromotionalComponent } from './promotional/promotional.component';

@NgModule({
  declarations: [
    PromotionalPageComponent,
    BannerComponent,
    PromotionalComponent
  ],
  imports: [
    CommonModule,
    PromotionalPageRoutingModule
  ]
})
export class PromotionalPageModule { }
