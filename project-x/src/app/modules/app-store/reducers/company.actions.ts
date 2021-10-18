import { createAction } from '@ngrx/store';
import { Company } from '../../../models/model';
import { SET_COMPANY, FETCH_COMPANY } from './company.action-types';

export type SetCompanyAction = {
  type: string;
  payload: Company
}

export type FetchCompanyAction = {
  type: string;
  payload: string;
}

export const setCompany = createAction(
  SET_COMPANY,
  (payload: Company) => ({ payload })
);

export const fetchCompany = createAction(
  FETCH_COMPANY,
  (payload: string) => ({ payload })
);
