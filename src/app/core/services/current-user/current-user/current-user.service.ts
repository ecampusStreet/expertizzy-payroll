import { Injectable } from '@angular/core';
// import jwt_decode from "jwt-decode";
import * as moment from 'moment';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../localStorage';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
token : any;
  constructor(private storage: LocalStorageService,
    private router : Router) {
  }

  setUser(data:any): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(data,"data");
      this.storage.setLocalStorage('userDetails', JSON.stringify(data)).then(success => {
        this.token = data;
        resolve(data);
      }).catch(error => {
        reject(error)
      })
    })
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.getLocalStorage('userDetails').then((data:any) => {
        this.token = JSON.parse(data);
        console.log(JSON.stringify(JSON.parse(data)),"data");
        resolve(JSON.parse(data));
      }).catch(error => {
        reject()
      })
    })
  }

  deleteUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.deleteAllStorage().then(data => {
        resolve(data);
        this.router.navigate(['login']);
      }).catch(error => {
        reject()
      })
    })
  }
  
  getAccessToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.getLocalStorage('userDetails').then(data => {
        data ? resolve(data) : resolve('');
      }).catch(error => {
        resolve('')
      })
    })
  }

  validateToken(token:any){
    // const tokenDecoded: any = jwt_decode(token);
    // const tokenExpiryTime = moment(tokenDecoded.exp * 1000);
    // const currentTime = moment(Date.now());
    // const duration = moment.duration(tokenExpiryTime.diff(currentTime));
    // const hourDifference = duration.asHours();
    // return (hourDifference < 2) ? false : true;
  }
}
