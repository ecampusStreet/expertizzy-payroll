import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
    public toastService : ToastService,
    private router : Router
  ) { }


  get(requestParam : any) {
    this.baseUrl =this.baseUrl ? this.baseUrl :  environment.appBase;
    return this.http.get(environment.apiBaseUrl + this.baseUrl + requestParam.url).pipe(
      tap((data:any) => {
        if(data.status == 401){
          this.userService.deleteUser().then(resp =>{
            this.router.navigate(['/login']);
          })
        }else{
          return data
        }
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }

  post(requestParam : any){
    this.baseUrl =this.baseUrl ? this.baseUrl :  environment.appBase;
    return this.http.post(environment.apiBaseUrl + this.baseUrl + requestParam.url, requestParam.payload).pipe(
      tap((data:any) => {
        if(data.status == 401){
          this.userService.deleteUser().then(resp =>{
            this.router.navigate(['/login']);
          })
        }else{
          return data
        }
      }),
      catchError(this.handleError([]))
    )
  }

  put(requestParam : any): Observable<any> {
    return this.http.put(environment.apiBaseUrl + this.baseUrl + requestParam.url, requestParam.payload).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }

  delete(requestParam : any): Observable<any> {
    return this.http.delete(environment.apiBaseUrl + this.baseUrl + requestParam.url).pipe(
      tap(data => {
        return data
      }, error => {
      }),
      catchError(this.handleError([]))
    )
  }
  patch(requestParam : any): Observable<any> {
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
    return (error: any): Observable<any> => {
console.log(error,"error");
      if (error.status === 404) {
        this.toastService.error('Somthing went wrong, please try again after sometime.');
      }else
      if (error.status === 401) {
        debugger
        if(error.error.message == 'permission denied'){
          this.toastService.error('Permission Denied');
        }else{
          this.toastService.error('Authentication failed, please login again');
          this.userService.deleteUser().then(resp =>{
            this.router.navigate(['/login'])
          })
        }
        
      } else {
        this.toastService.error(error.message);
      }
      return of(result);
    };
  }

  getToken(){
  //  return this.auth.getUser();
  }
}
