import { Component, OnInit } from '@angular/core';
import { Option } from '../../types/navigation-menu.types';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  options: Option[] = [
    {
      label: 'Dashboard',
      value: 'Dashboard',
      selected: true,
      styles: {
        color: '#532eb3',
        fontWeight: 'bold'
      }
    },
    {
      label: 'Support',
      value: 'Support',
      selected: false,
      styles: {
        color: '#52575c',
        fontWeight: 'bold'
      }
    },
    {
      label: 'Module',
      value: 'Module',
      selected: false,
      styles: {
        color: '#52575c',
        fontWeight: 'bold'
      },
      subOptions: [
        {
          label: 'Sales & Payments module',
          value: 'Sales & Payments module',
          selected: false,
          styles: {}
        },
        {
          label: 'Profit/Loss Analysis Module',
          value: 'Profit/Loss Analysis Module',
          selected: false,
          styles: {}
        },
        {
          label: 'Accounting Integration Module',
          value: 'Accounting Integration Module',
          selected: false,
          styles: {}
        },
        {
          label: 'Restock Inventory Module',
          value: 'Restock Inventory Module',
          selected: false,
          styles: {}
        },
        {
          label: 'Order Management Module',
          value: 'Order Management Module',
          selected: false,
          styles: {}
        },
        {
          label: 'Automatic Repricing',
          value: 'Automatic Repricing',
          selected: false,
          styles: {}
        },
        {
          label: 'Seller Feedback',
          value: 'Seller Feedback',
          selected: false,
          styles: {}
        },
        {
          label: 'Reports',
          value: 'Reports',
          selected: false,
          styles: {}
        },
      ]
    },
    {
      label: 'Masters',
      value: 'Masters',
      selected: false,
      styles: {
        color: '#52575c',
        fontWeight: 'bold'
      },
      subOptions: [
        {
          label: 'Link SKU to E-commerce Channel',
          value: 'Link SKU to E-commerce Channel',
          selected: false,
          styles: {}
        },
        {
          label: 'GST rate setup',
          value: 'GST rate setup',
          selected: false,
          styles: {}
        },
        {
          label: 'SKU costing setup',
          value: 'SKU costing setup',
          selected: false,
          styles: {}
        },
      ]
    },
    {
      label: 'Profile',
      value: 'Profile',
      selected: false,
      styles: {
        color: '#52575c',
        fontWeight: 'bold'
      },
      subOptions: [
        {
          label: 'User Profile',
          value: 'User Profile',
          selected: false,
          styles: {}
        },
        {
          label: 'Link E-commerce Channel',
          value: 'Link E-commerce Channel',
          selected: false,
          styles: {}
        },
      ]
    },
    {
      label: 'Logout',
      value: 'logout',
      selected: false,
      styles: {
        color: '#52575c',
        fontWeight: 'bold'
      },
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onNavigationChange({ value }: Option) {
    this.options = this.options.map((option) => ({
      ...option,
      selected: value === option.value,
      styles: value === option.value
        ? {
          ...option.styles,
          color: '#532eb3'
        }
        : option.styles
    }));
  }
}
