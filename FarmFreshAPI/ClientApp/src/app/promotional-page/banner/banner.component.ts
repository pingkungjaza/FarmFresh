import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @HostListener("window:scroll", []) onWindowScroll() {
    document.body.style.setProperty(
      "--scroll",
      (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString()
    )
  }
}
