import { Component, OnInit } from '@angular/core';

import { User } from '../../models/model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    name: 'John Doe',
    role: 'Admin',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
