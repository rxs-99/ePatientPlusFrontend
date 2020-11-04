import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  /**************************************
   * Rabinson's note
   * This part is used for doctor functionaliy,
   * Will refactor later
   **************************************/

  getAll(): Observable<Appointment[]>{
    return this.httpClient.get("http://localhost:8080/ePatient/appointment/status/pending") as Observable<Appointment[]>;
  }

  update(appointment: Appointment): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(appointment);

    return this.httpClient.post("http://localhost:8080/ePatient/appointment/update",body, {headers:headers}) as Observable<boolean>;
  }

  /****************************************
   ***************** END ******************
   ****************************************/

  createAppointment(appointment: Appointment) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(appointment) 

    return this.httpClient.post("http://localhost:8080/ePatient/appointment/new", body, {headers:headers});
  }

  getAllAppointments() : Observable<Appointment[]> {

    return this.httpClient.get("http://localhost:8080/ePatient/appointment/all") as Observable<Appointment[]>;
  }

  getAllPendingAppointments() : Observable<Appointment[]> {

    return this.httpClient.get("http://localhost:8080/ePatient/appointment/status/pending") as Observable<Appointment[]>;
  }

  updateAppointment(appointment:Appointment){

    //We must manually construct our HTTP header and Body.
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(appointment) 

    return this.httpClient.post("http://localhost:8080/ePatient/appointment/update", body, {headers:headers});
  }

}
