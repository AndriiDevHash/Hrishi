import { Component, OnInit } from '@angular/core';

import { User } from '../../types/user.types';
import { user } from '../../mocks/user';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  user: User = user;

  constructor() { }

  ngOnInit(): void {
  }

}
