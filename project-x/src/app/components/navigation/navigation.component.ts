import { Component, OnInit } from '@angular/core';

import { NavigationItem } from '../../models/model';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationList: NavigationItem[] = [
    {
      name: 'Home',
      active: false
    },
    {
      name: 'Screener',
      active: false
    },
    {
      name: 'Memo',
      active: true
    },
    {
      name: 'Alerts',
      active: false
    },
    {
      name: 'Dashboard',
      active: false
    }
  ];

  constructor() {  }

  onNavigationItemClick(item: NavigationItem): void {
    this.navigationList = this.navigationList.map((navigationItem) => {
      return {
        ...navigationItem,
        active: item.name === navigationItem.name
      }
    });
  }

  getNavigationItemClass(item: NavigationItem): any {
    return {
      'navigation-menu__item--active': item.active,
      'navigation-menu__item': true
    }
  }

}
