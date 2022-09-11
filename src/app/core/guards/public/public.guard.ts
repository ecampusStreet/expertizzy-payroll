import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { CurrentUserService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private userService: CurrentUserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.userService.getUser().then(success => {
        if (success) {
          this.router.navigate(['/menu/home']);
          resolve(false)
        } else {
          resolve(true)
        }
      }).catch(error => {
        resolve(true)
      })
    })
  }
}
