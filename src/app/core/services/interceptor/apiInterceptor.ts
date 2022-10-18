import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CurrentUserService } from '../current-user/current-user/current-user.service';
import { environment } from 'src/environments/environment';

// import { CurrentUserService } from '../services';
// import { Platform } from '@ionic/angular';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(
        private userService: CurrentUserService,
        // private platform: Platform,
        private auth: AuthService
    ) {
    }
    getToken(){
        return this.userService.getAccessToken().then(token =>{
            let accessToken:any =  JSON.parse(token);
            return accessToken.accessToken;
        })
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handle(request, next))  as Observable<HttpEvent<any>>;
    }

    async handle(req: HttpRequest<any>, next: HttpHandler) {
        let authReq;
        if (req.url != environment.apiBaseUrl + "auth/login") {
            const token :any =  await this.getToken();
            authReq = req.clone({
                setHeaders: {
                    'authorization':'bearer '+ token,
                }
            });
        return next.handle(authReq).toPromise()
        } else {
            authReq = req.clone({
            })
        }
        return next.handle(authReq).toPromise()
    }
}