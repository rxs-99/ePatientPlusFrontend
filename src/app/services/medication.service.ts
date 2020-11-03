import { HttpClient } from '@angular/common/http';
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
}
