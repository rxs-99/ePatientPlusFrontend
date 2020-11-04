import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../models/Prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  add(prescription: Prescription): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(prescription);

    return this.http.post("http://localhost:8080/ePatient/prescription/add",body, {headers:headers}) as Observable<boolean>;
  }
}
