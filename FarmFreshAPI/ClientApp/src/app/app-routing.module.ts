import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './login-page/login/login.component';

const siteName = "FarmFresh";
const routes: Routes = [
  { path: '', redirectTo: '/promotion', pathMatch: 'full', title: `${siteName}` },
  { path: 'promotion', loadChildren: () => import('./promotional-page/promotional-page.module').then(m => m.PromotionalPageModule) },
  { path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'shopping', loadChildren: () => import('./shopping-page/shopping-page.module').then(m => m.ShoppingPageModule), canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
