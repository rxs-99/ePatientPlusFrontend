import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  personId: number;
  person: Person = new Person(0, "", "", "", null);

  constructor(private personService: GetPatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getPersonInfo(this.personId);
  }

  getPersonInfo(id: number): void {
    this.personService.getPerson(id).subscribe(
      (person) => {
        this.person = person;
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }
}
