import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// TODO: this class needs to be renamed to person.service.
export class GetPatientService {
  constructor(private httpClient: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this.httpClient.get(environment.getPerson + id) as Observable<Person>;
  }

  getDoctors(): Observable<Person[]> {
    return this.httpClient.get(environment.getDoctors) as Observable<Person[]>;
  }

  getAllPatients(): Observable<Person[]> {
    return this.httpClient.get(environment.getAllPatients) as Observable<Person[]>;
  }

  setPerson(id: number, newPerson: Person): Observable<Object> {
    let httpHeader: HttpHeaders = new HttpHeaders().set("content-type", "application/json");
    let jsonPerson: string = JSON.stringify(newPerson);

    return this.httpClient.post(environment.editPerson, jsonPerson, {headers: httpHeader});
  }
}
