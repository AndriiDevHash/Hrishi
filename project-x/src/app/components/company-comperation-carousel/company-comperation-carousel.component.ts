import { Component, OnInit } from '@angular/core';

import { companies } from '../../mock-data/companies';

@Component({
  selector: 'app-company-comperation-carousel',
  templateUrl: './company-comperation-carousel.component.html',
  styleUrls: ['./company-comperation-carousel.component.scss']
})
export class CompanyComperationCarouselComponent implements OnInit {
  companies = companies.slice(0, 3);
  rateStyle = {
    'background-color': 'transparent',
    'font-weight': 'bold'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
