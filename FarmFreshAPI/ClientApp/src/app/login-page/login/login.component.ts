import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  invalidLogin?: boolean;

  url = environment.apiUrl + '/';

  constructor(private router: Router, private http: HttpClient) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post(this.url + "login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response);
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/shopping"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

  ngOnInit(): void {
  }

}
