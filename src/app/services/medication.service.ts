import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from '../models/Medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Medication[]>{
    return this.http.get("http://localhost:8080/ePatient/medication/all") as Observable<Medication[]>;
  }

  add(medication: Medication): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(medication);

    return this.http.post("http://localhost:8080/ePatient/medication/add",body, {headers:headers}) as Observable<boolean>;
  }

  update(medication: Medication): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(medication);

    return this.http.post("http://localhost:8080/ePatient/medication/update",body, {headers:headers}) as Observable<boolean>;
  }
}
