import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  person: Person = new Person(0, "", "", "");;

  constructor(private personService: GetPatientService) { }

  ngOnInit(): void {
    this.getPersonInfo();
  }

  getPersonInfo(): void {
    // TODO id should be based off of session data; this placeholder WILL need to be replaced before demo!
    this.personService.getPerson(1).subscribe(
      (person) => {
        this.person = person;
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }
}
