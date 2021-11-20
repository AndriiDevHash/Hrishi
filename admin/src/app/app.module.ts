import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionStatusPipe } from './pipes/subscription-status/subscription-status.pipe';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    DashboardComponent,
    HeaderComponent,
    FiltersComponent,
    UserProfileComponent,
    SubscriptionComponent,
    SubscriptionStatusPipe,
    SideNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
