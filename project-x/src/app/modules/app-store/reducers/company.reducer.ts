import { createReducer, on } from '@ngrx/store';

import { Company } from '../../../models/model';
import { setCompany, SetCompanyAction } from './company.actions';

const initialState = {};

const onCompanySet = (state: Company | {}, action: SetCompanyAction) => action.payload

export const companyReducer = createReducer(
  initialState,
  on(setCompany, onCompanySet)
);
