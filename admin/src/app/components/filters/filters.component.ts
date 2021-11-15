import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  activeFilter: string = '1M';
  filters: any = [
    {
      value: '7H',
      label: 'Last 7 hours',
    },
    {
      value: '1M',
      label: 'One month',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
