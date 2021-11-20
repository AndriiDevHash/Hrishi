import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../types/user.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user;
  }
}
