import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

import { Company } from '../../models/model';
import { State } from '../../models/state.model';
import { CompanyService } from '../../services/company/company.service';
import { setCompany, fetchCompany } from '../../modules/app-store/reducers/company.actions';
import { switchMap, tap } from 'rxjs/operators';
import { companies } from '../../mock-data/companies';

type SearchEvent = {
  term: string,
  items: Company[]
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  companies$: Observable<Company[]> = from([]);
  selectedCompanyId: string;
  subject = new Subject();

  constructor(
    private companyService: CompanyService,
    private store: Store<State>
    ) { }

  ngOnInit(): void {
  }

  onSearch(event: SearchEvent) {
    this.companies$ = this.companyService.getCompanies(event.term);
  }

  onChange() {
    console.log(this.selectedCompanyId);

    this.store.dispatch(fetchCompany(this.selectedCompanyId));
    // this.store.dispatch(setCompany(companies[0]))

    // this.companyService.getCompany(this.selectedCompanyId).pipe(
    //   tap((company) => {
    //     console.log(company);

    //     this.store.dispatch(setCompany(company))
    //   })
    // )
  }
}
