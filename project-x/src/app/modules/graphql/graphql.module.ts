import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

import { API_CONFIG } from '.././../configs/api.config';

@NgModule({
  exports: [ HttpClientModule ]
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: API_CONFIG.URI }),
      cache: new InMemoryCache()
    })
  }
}
