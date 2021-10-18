import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { CompanyService } from '../../../services/company/company.service';
import { SET_COMPANY, FETCH_COMPANY } from './company.action-types';
import { FetchCompanyAction } from './company.actions';

@Injectable()
export class CompanyEffects {
  loadCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_COMPANY),
      switchMap(({ payload }: FetchCompanyAction) => {
        return this.companyService.getCompany(payload).pipe(
          map((company) => ({ type: SET_COMPANY, payload: company }))
        )
      }),
    )
  }
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
