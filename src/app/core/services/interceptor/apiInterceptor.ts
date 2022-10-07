// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor
// } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { AuthService } from '../auth/auth.service';
// import { CurrentUserService } from '../current-user/current-user/current-user.service';
// // import { CurrentUserService } from '../services';
// // import { Platform } from '@ionic/angular';

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {
//     token ='';
//     constructor(
//         private userService: CurrentUserService,
//         // private platform: Platform,
//         private auth: AuthService
//     ) {
//     }
//     getToken(){
//         return this.userService.getAccessToken().then(token =>{
//             let accessToken:any =  JSON.parse(token);
//             return accessToken.access_token;
//         })
//     }
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return this.handle(request, next );
        
//     }

//     async handle(req: HttpRequest<any>, next: HttpHandler) {
//         let authReq;
//         if (req.url != "http://44.235.110.99/acceleration/v1/account/login") {
//             const token :any =  await this.getToken();
//             authReq = req.clone({
//                 setHeaders: {
//                     'X-auth-token':'bearer '+ token,
//                 }
//             });
//         return next.handle(authReq).toPromise()
//         } else {
//             authReq = req.clone({
//             })
//         }
//         return next.handle(authReq).toPromise()
//     }
// }