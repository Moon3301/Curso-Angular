import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  menuItems: MenuItem[] | undefined;

  ngOnInit() {

    this.menuItems = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'

            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'uncommon'
            },
          ]
      },
      {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Custom pipes',
              icon: 'pi pi-bolt',
              routerLink: 'custom'
            },

          ]
      },

    ]

  }

}
