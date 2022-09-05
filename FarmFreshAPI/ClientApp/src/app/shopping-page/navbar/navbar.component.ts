import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public service: MenuService) { }

  ngOnInit(): void {
  }

  toggleMenu(menuId: number): void {
    //close every opened menu
    if (this.service.menu_list.find(e => e.menuId !== menuId)!.isMenuOpened === true) {
      this.service.menu_list.filter(e => e.menuId !== menuId)!.map(e => e.isMenuOpened = false);
    }

    //check menu have submenu
    if (this.service.menu_list.find(e => e.menuId === menuId)!.subMenu.length > 0) {
      if (this.service.menu_list.find(e => e.menuId === menuId)!.isMenuOpened === true) {
        //close the menu
        this.service.menu_list.find(e => e.menuId === menuId)!.isMenuOpened = false;
      } else {
        //open the menu
        this.service.menu_list.find(e => e.menuId === menuId)!.isMenuOpened = true;
      }
    }

  }

  clickOutside(): void {
    console.log("outside")

    this.service.menu_list.find(e => e.isMenuOpened === true)!.isMenuOpened = !this.service.menu_list.find(e => e.isMenuOpened === true)!.isMenuOpened;
  }
}
