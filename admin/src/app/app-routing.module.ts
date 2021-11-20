import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

import { UserResolver } from './resolvers/user/user.resolver';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
