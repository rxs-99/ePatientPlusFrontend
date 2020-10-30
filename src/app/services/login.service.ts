import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  /*login(username: String, password: String):Observable<Object> {

  	const options = username&password ?
   { params: new HttpParams().set('name', term) } : {};

  	return this.httpClient.post('http://localhost:8080/ePatient/login', options);
  }*/

}
