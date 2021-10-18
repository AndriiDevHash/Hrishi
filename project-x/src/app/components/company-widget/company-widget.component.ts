import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isEmpty } from 'ramda';
import { Subscription } from 'rxjs';

import { Company } from '../../models/model';
import { State } from '../../models/state.model';
import { selectCompany } from '../../modules/app-store/reducers/company.selectors';
@Component({
  selector: 'app-company-widget',
  templateUrl: './company-widget.component.html',
  styleUrls: ['./company-widget.component.scss']
})
export class CompanyWidgetComponent implements OnInit, OnDestroy {
  company: Company;
  isCompanyPresent: boolean = false;
  subscription: Subscription

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectCompany)
      .subscribe((company: Company) => {
        this.isCompanyPresent = !isEmpty(company);
        this.company = company;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
