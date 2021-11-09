import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Keys',
        items: [
          {
            label: 'Stock Disponible',
            icon: 'pi pi-key',
            routerLink: 'stock',
          },
          {
            label: 'Vendidas',
            icon: 'pi pi-shopping-cart',
            routerLink: 'sold',
          },
        ],
      },
    ];
  }
}
