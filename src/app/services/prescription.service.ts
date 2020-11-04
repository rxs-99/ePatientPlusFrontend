import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  add(prescription: Prescription): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(prescription);

    return this.http.post(environment.addPrescription,body, {headers:headers}) as Observable<boolean>;
  }

  getAll(): Observable<Prescription[]> {
    return this.http.get(environment.getAllPrescriptions) as Observable<Prescription[]>;
  }
}
