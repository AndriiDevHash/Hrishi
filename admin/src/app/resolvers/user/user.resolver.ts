import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { user } from '../../mocks/user';
import { User } from '../../types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return of(user);
  }
}
