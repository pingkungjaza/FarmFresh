export class Menu {
    menuId: number;
    name: string;
    subMenu: string[];
    isMenuOpened: boolean;

    constructor() {
        this.menuId = 0;
        this.name = "";
        this.subMenu = [""];
        this.isMenuOpened = false;
    }
}
