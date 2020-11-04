import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Medication } from '../models/medication';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Appointment[]>{
    return this.http.get("http://localhost:8080/ePatient/appointment/status/pending") as Observable<Appointment[]>;
  }

  update(appointment: Appointment): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(appointment);

    return this.http.post("http://localhost:8080/ePatient/appointment/update",body, {headers:headers}) as Observable<boolean>;
  }
}
