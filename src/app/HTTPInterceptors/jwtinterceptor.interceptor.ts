import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");
    if (token && !request.url.includes("login")) {
      if (this.authService.isLoggedIn()) {
        const cloned = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + token)
        });
        return next.handle(cloned);
      } else {
        this.router.navigateByUrl("/authTokenExpired");
      }
    } else {
      if(request.url.includes("login")){
        return next.handle(request);
      } else {
        this.router.navigateByUrl("/authTokenNotFound");
      }
    }

  }
}
