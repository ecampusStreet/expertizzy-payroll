import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentUserService } from '../current-user/current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private currentUser: CurrentUserService) { }

    getUser() {
      return this.currentUser.getUser().then(user =>{
        console.log(user,"user");
        return user;
      })
    }

}