import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-info',
  templateUrl: './rate-info.component.html',
  styleUrls: ['./rate-info.component.scss']
})
export class RateInfoComponent implements OnInit {
  @Input() rate: number;
  @Input() rateType: string;
  @Input() rateStyle: Object;
  @Input() rateSignType: string = 'icon';

  rateClases: string[];
  sign: string;

  constructor() { }

  ngOnInit(): void {
    this.rateClases = this.getRateElementClasses();
    this.sign = this.isCompanyRateIncrease(this.rateType) ? '+' : '-';
  }

  isCompanyRateIncrease(rateType: string): boolean {
    return rateType === 'increase';
  }

  getRateElementClasses(): string[] {
    const rateTypeClass = this.isCompanyRateIncrease(this.rateType)
      ? 'rate--increase'
      : 'rate--decrease';

    return [ 'rate', rateTypeClass ];
  }

}
