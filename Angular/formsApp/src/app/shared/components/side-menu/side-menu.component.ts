import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  standalone: false,

  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] =  [

    { title: 'basicos', route: './reactive/basics'},
    { title: 'dinamicos', route: './reactive/dynamic'},
    { title: 'Switches', route: './reactive/switches'},

  ]

  public authMenu: MenuItem[] = [
    { title: 'auth', route: './auth'}
  ]
}
