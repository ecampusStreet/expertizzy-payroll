import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { RequestParams } from '../../interfaces/request-params';
// import { environment } from 'src/environments/environment';
// import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user/current-user/current-user.service';
import { ToastService } from '../toast.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  popOpen: boolean = false;
  baseUrl: string ='';
  // auth: AuthService;
  header ='';
  constructor(public http: HttpClient,
    public userService : CurrentUserService,
    public toastService : ToastService
  ) { }


  get(requestParam : any) {
    this.baseUrl =this.baseUrl ? this.baseUrl :  environment.appBase;
    console.log(environment.apiBaseUrl + this.baseUrl + requestParam.url,"environment.apiBaseUrl + this.baseUrl + ");
    return this.http.get(environment.apiBaseUrl + this.baseUrl + requestParam.url).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }

  post(requestParam : any){
    this.baseUrl =this.baseUrl ? this.baseUrl :  environment.appBase;
    return this.http.post(environment.apiBaseUrl + this.baseUrl + requestParam.url, requestParam.payload).pipe(
      tap(data => {
        return data
      }),
      catchError(this.handleError([]))
    )
  }

  put(requestParam : any): Observable<any> {
    console.log(environment.apiBaseUrl + this.baseUrl + requestParam.url, "environment.apiBaseUrl + this.baseUrl + requestParam.url");
    return this.http.put(environment.apiBaseUrl + this.baseUrl + requestParam.url, requestParam.payload).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }

  delete(requestParam : any): Observable<any> {
    console.log(environment.apiBaseUrl + this.baseUrl + requestParam.url, "environment.apiBaseUrl + this.baseUrl + requestParam.url");
    return this.http.delete(environment.apiBaseUrl + this.baseUrl + requestParam.url).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }
  patch(requestParam : any): Observable<any> {
    console.log(environment.apiBaseUrl + this.baseUrl + requestParam.url, "environment.apiBaseUrl + this.baseUrl + requestParam.url");
    return this.http.patch(environment.apiBaseUrl + this.baseUrl + requestParam.url,requestParam.payload).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([Error]))
    )
  }

  // postWithHeader(url, data, id): Observable<any> {

  //   const headers = new HttpHeaders()
  //     .set('vendorid', id);
  //   return this.http.post(environment.apiBaseUrl + this.baseUrl + url.url,{headers}).pipe(
  //     tap(data => {
  //       console.log(data, " data innnn ******");
  //       return data
  //     }, error => {
  //       console.log('error ====>', error);
  //     }),
  //     catchError(this.handleError([]))
  //   )
  // }

  private handleError(result : any) {
    console.log(result,"result");
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error,"errror"); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      if (error.status === 401) {
        // this.toastService.displayMessage('Session timeout, please login','danger');
        this.userService.deleteUser().then(resp =>{})
      } else {
        console.log(error.message);
        this.toastService.error(error.error.message);
      }
      return of(result);
    };
  }

  getToken(){
  //  return this.auth.getUser();
  }
}
