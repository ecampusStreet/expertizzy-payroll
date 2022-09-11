import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../services';


@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  constructor(private userService: CurrentUserService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      console.log('sfddfd');
      this.userService.getUser().then(success => {
        console.log('sfddfd');
        if (success) {
          resolve(true)
        } else {
          this.router.navigateByUrl('login');
          resolve(false)
        }
      }).catch(error => {
        this.router.navigateByUrl('login');
        resolve(false)
      })
    })
  }

}
