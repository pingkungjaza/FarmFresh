import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProductService } from '../shared/product-detail.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {


  constructor(public productService: ProductService, private jwtHelper: JwtHelperService, private router:Router) { }

  ngOnInit(): void {
    this.isUserAuthenticated();
  }

  ngAfterViewInit(): void {
    document.body.style.setProperty(
      "--headerHeight",
      (document.querySelector("header")!.offsetHeight).toString() + `px`
    )

    document.body.style.setProperty(
      "--navWidth",
      (document.querySelector("nav")!.offsetWidth).toString() + `px`
    )
  }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
