import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medication } from '../models/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Medication[]>{
    return this.http.get(environment.getAllMedications) as Observable<Medication[]>;
  }

  add(medication: Medication): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(medication);

    return this.http.post(environment.addMedication,body, {headers:headers}) as Observable<boolean>;
  }

  update(medication: Medication): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(medication);

    return this.http.post(environment.updateMedication,body, {headers:headers}) as Observable<boolean>;
  }
}
