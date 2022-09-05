import { Injectable } from '@angular/core';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  menu: Menu = new Menu();
  menu_list: Menu[] = [
    { menuId: 1, name: "On Sales!", subMenu: ["Latest", "Past Offers", "Future Offers"], isMenuOpened: false },
    { menuId: 2, name: "New", subMenu: [], isMenuOpened: false },
    { menuId: 3, name: "Shop by Store", subMenu: [], isMenuOpened: false },
    { menuId: 4, name: "Fruit & Veg", subMenu: [], isMenuOpened: false },
    { menuId: 5, name: "Meat & Seafood", subMenu: [], isMenuOpened: false },
    { menuId: 6, name: "Dairy and Chilled", subMenu: [], isMenuOpened: false },
    { menuId: 7, name: "Bakery", subMenu: [], isMenuOpened: false },
    { menuId: 8, name: "Beverages", subMenu: [], isMenuOpened: false },
  ];
}
