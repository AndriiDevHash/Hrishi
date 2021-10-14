import { Component, OnInit } from '@angular/core';

import { Company } from '../../models/model';
import { companies } from '../../mock-data/companies';

@Component({
  selector: 'app-search-carousel',
  templateUrl: './search-carousel.component.html',
  styleUrls: ['./search-carousel.component.scss']
})
export class SearchCarouselComponent implements OnInit {
  companies: Company[] = companies;

  constructor() { }

  ngOnInit(): void {
  }


}
