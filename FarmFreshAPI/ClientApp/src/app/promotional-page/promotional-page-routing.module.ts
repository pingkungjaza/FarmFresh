import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionalPageComponent } from './promotional-page.component';

const routes: Routes = [{ path: '', component: PromotionalPageComponent, title: "FarmFresh - Promotion" }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionalPageRoutingModule { }
