import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// TODO: this class needs to be renamed to person.service.
export class GetPatientService {
  constructor(private httpClient: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this.httpClient.get("http://localhost:8080/ePatient/person/get/" + id) as Observable<Person>;
  }
}
