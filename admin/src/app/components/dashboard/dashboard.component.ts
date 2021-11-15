import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [
    {
      label: 'Sales',
      value: '40',
      icon: 'bi bi-cash-stack'
    },
    {
      label: 'Returns',
      value: '50',
      icon: 'bi bi-cash-stack'
    },
    {
      label: 'Payments',
      value: '120',
      icon: 'bi bi-cash-coin'
    },
    {
      label: 'Outstanding Payments',
      value: '200',
      icon: 'bi bi-cash-stack'

    },
    {
      label: 'Sales Qty',
      value: 'Nos.',
      icon: 'bi bi-cart-check'

    },
    {
      label: 'Retuns Qty',
      value: 'Nos.',
      icon: 'bi bi-cart-check'

    },
    {
      label: 'E-commerce Channel Expenses',
      value: '70',
      icon: 'bi bi-cash-coin'

    },
    {
      label: 'Misc. Incomes from Channel',
      value: '80',
      icon: 'bi bi-cash-coin'

    },
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
