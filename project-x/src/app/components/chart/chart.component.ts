import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';

import { Company, Option } from 'src/app/models/model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() company: Company;

  rateStyle: Object = {
    'border-radius': '20px',
    'padding': '5px 10px',
    'font-weight': 'bold',
  }

  rangesFilter: Option[] = [
    {
      value: '1D',
      selected: false,
    },
    {
      value: '1W',
      selected: false,
    },
    {
      value: '1M',
      selected: false,
    },
    {
      value: '3M',
      selected: false,
    },
    {
      value: '6M',
      selected: true,
    },
    {
      value: 'YTD',
      selected: false,
    },
    {
      value: '1Y',
      selected: false,
    },
    {
      value: '3Y',
      selected: false,
    },
    {
      value: '5Y',
      selected: false,
    },
    {
      value: 'MAX',
      selected: false,
    }
  ];

  pricesFilter = [
    {
      value: 'Price',
      selected: false
    },
    {
      value: 'PE Ratio',
      selected: true
    },
    {
      value: 'Margin',
      selected: false
    },
    {
      value: 'Returns',
      selected: false
    }
  ];

  bottomLegends = [
    {
      value: 'Price',
      selected: false
    },
    {
      value: 'Volume',
      selected: false
    },
    {
      value: '50 DMA',
      selected: false
    },
    {
      value: '200 DMA',
      selected: true
    }
  ]

  chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: '40px',
      left: '30px',
      right: '25px',
      bottom: '20px'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      offset: 0.1,
      data: ['Dec 2018', 'Jun 2019', 'Dec 2019', 'Jun 2020', 'Dec 2020', 'Jun 2021'],
    },
    yAxis: {
      type: 'value',
      data: [0, 20, 40, 60, 80, 100, 120, 140, 160]
    },
    series: [
      {
        data: [10, 20, 80, 45, 40, 140, 120, 100, 130],
        smooth: true,
        type: 'line',
        itemStyle: {
          color: '#00c918'
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#45e257'
            },
            {
              offset: 0.3,
              color: '#adffb6'
            },
            {
              offset: 0.9,
              color: '#fff'
            }
          ])
        },
      },
    ],
  }

  rateDescriptionClasses: string[];
  rateDescription: string;

  constructor() { }

  ngOnInit(): void {
    this.rateDescriptionClasses = this.getRateDescriptionClasses();
    this.rateDescription = this.getRateDescription();
  }

  isCompanyRateIncrease(rateType: string) {
    return rateType === 'increase';
  }

  getSelectedRangeFilterValue(): string {
    const range = this.getSelectedRangeFilter();

    return range?.value || '';
  }

  getSelectedRangeFilter(): Option | undefined {
    return this.rangesFilter.find(({ selected }) => selected);
  }

  getRateDescription() {
    const sign: string = this.isCompanyRateIncrease(this.company.rateType) ? '+' : '-';

    return `${ sign } ${this.company.rateAmount}$ in ${ this.getSelectedRangeFilterValue() }`;
  }

  getRateDescriptionClasses() {
    const modificator: string = this.isCompanyRateIncrease(this.company.rateType)
      ? 'chart-title__rate-description--increase'
      : 'chart-title__rate-description--decrease'

    return [ 'chart-title__rate-description', modificator ];
  }
}
