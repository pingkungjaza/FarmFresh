import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
   this.isUserAuthenticated();
  }

  ngAfterViewInit(): void {
    document.body.style.setProperty(
      "--headerHeight",
      (document.querySelector("header")!.offsetHeight).toString() + `px`
    )

    document.body.style.setProperty(
      "--fillHeight",
      ((document.querySelector("html")!.offsetHeight) - (document.querySelector("header")!.offsetHeight)).toString() + `px`
    )
  }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
}
