import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  getAllAppointments() : Observable<Appointment[]> {

    return this.httpClient.get("http://localhost:8080/ePatient/appointment/all") as Observable<Appointment[]>;
  }

  getAllPendingAppointments() : Observable<Appointment[]> {

    return this.httpClient.get("http://localhost:8080/ePatient/appointment/status/pending") as Observable<Appointment[]>;
  }
}
