import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Company } from '../../models/model';

type GetCompaniesQuery = {
  getCompanies: Company[]
}

type GetCompanyQuery = {
  getCompany: Company
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private apollo: Apollo) { }

  getCompanies(name: string): Observable<Company[]> {
    return this.apollo
      .watchQuery<GetCompaniesQuery>({
        query: gql`
          {
            getCompanies(name: "${ name }") {
              name
              adsh
            }
          }
        `
      })
      .valueChanges
      .pipe(
        map((result) => result.data.getCompanies || [])
      )
  }

  getCompany(id: string): Observable<Company> {
    return this.apollo
      .watchQuery<GetCompanyQuery>({
        query: gql`
          {
            getCompany(adsh: "${ id }") {
              name
              value
              version
              tag
              adsh
            }
          }
        `
      })
      .valueChanges
      .pipe(
        map((result) => result.data.getCompany || {}),
      )
  }
}
