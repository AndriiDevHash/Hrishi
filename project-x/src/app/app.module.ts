import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

// MODULES
import { GraphqlModule } from './modules/graphql/graphql.module';
import { AppStoreModule } from './modules/app-store/app-store.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CompanyWidgetComponent } from './components/company-widget/company-widget.component';
import { ChartComponent } from './components/chart/chart.component';
import { SearchCarouselComponent } from './components/search-carousel/search-carousel.component';
import { RateInfoComponent } from './components/rate-info/rate-info.component';
import { CompanyComperationCarouselComponent } from './components/company-comperation-carousel/company-comperation-carousel.component';

// SERVICES
import { CompanyService } from './services/company/company.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SearchInputComponent,
    UserProfileComponent,
    CompanyWidgetComponent,
    ChartComponent,
    SearchCarouselComponent,
    RateInfoComponent,
    CompanyComperationCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    GraphqlModule,
    NgSelectModule,
    FormsModule,
    AppStoreModule,
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
