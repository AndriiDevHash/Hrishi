import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// REDUCERS
import { companyReducer } from './reducers/company.reducer';

// EFFECTS
import { CompanyEffects } from './reducers/company.effects';

import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ company: companyReducer }),
    EffectsModule.forRoot([ CompanyEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, autoPause: true }),
  ]
})
export class AppStoreModule { }
