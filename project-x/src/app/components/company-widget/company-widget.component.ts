import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/model';

@Component({
  selector: 'app-company-widget',
  templateUrl: './company-widget.component.html',
  styleUrls: ['./company-widget.component.scss']
})
export class CompanyWidgetComponent implements OnInit {
  company: Company = {
    name: 'Apple Inc',
    longName: 'Apple.com, Inc',
    marketCap: 2.09,
    stock: 27.2,
    roe: 103,
    sales: 0.59,
    faceValue: 1,
    tradeValueDay: 8.1,
    tradeValueMonth: 264,
    openingPrice: 124,
    h: 145,
    l: 78,
    roce: 40,
    hShort: 2.3,
    lShort: 0.5,
    bookValue: 4.2,
    currentShort: 0.73,
    label: 'APPL',
    amount: 3_510.98,
    rate: 2.27,
    rateType: 'increase',
    color: '#ed8449',
    active: false,
    rateAmount: 1.23
  }

  constructor() { }

  ngOnInit(): void {
  }

}
