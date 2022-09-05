import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService, private router: Router,) { }

  ngOnInit(): void {
  }

  onEnter() {
    this.router.navigate(["/shopping"]);
  }
}
