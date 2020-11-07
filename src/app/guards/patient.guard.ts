import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isLoggedIn()){
        if(this.authService.getDecodedToken(localStorage.getItem("token"))["role"] === "patient"){
          return true;
        }
      }

  }
  
}
