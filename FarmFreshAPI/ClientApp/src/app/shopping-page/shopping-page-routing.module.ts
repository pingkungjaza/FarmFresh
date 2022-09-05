import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingPageComponent } from './shopping-page.component';

const routes: Routes = [{ path: '', component: ShoppingPageComponent, title: "FarmFresh - Shopping" }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingPageRoutingModule { }
