import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient, private router: Router) { }

  login(login: Login):Observable<User> {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(login);
  	return this.httpClient.post(environment.login, body, {headers:headers}) as Observable<User>;
  }

  setSession(id: number, token: string): void{
    localStorage.setItem("person_id", id.toString());
    localStorage.setItem("token",token);
    localStorage.setItem("expiresAt",this.getDecodedToken(token)["exp"]);
  }

  getId(): number {
    return parseInt(localStorage.getItem("person_id"));
  }

  getDecodedToken(token: string): JSON {
    return JSON.parse(JSON.stringify(jwtDecode(token)));
  }

  isLoggedIn(): boolean {
    return new Date() < new Date(Number(localStorage.getItem("expiresAt"))* 1000);
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): Date {
    return new Date(Number(localStorage.getItem("expiresAt"))* 1000);
  }

  logOut(): void{
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    this.router.navigateByUrl("/login");
  }
}
