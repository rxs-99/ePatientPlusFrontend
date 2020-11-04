import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';

@Component({
  selector: 'app-patient-profile-edit',
  templateUrl: './patient-profile-edit.component.html',
  styleUrls: ['./patient-profile-edit.component.css']
})
export class PatientProfileEditComponent implements OnInit {
  person: Person = new Person(0, "", "", "", null);
  personEditForm: FormGroup;

  constructor(private personService: GetPatientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personEditForm = this.formBuilder.group({
      "name": "",
      "email": "",
      "phone": ""
    });

    this.personService.getPerson(1).subscribe(
      (person) => {
        this.person = person;
        this.personEditForm.setValue({
          "name": person.name,
          "email": person.email,
          "phone": person.phone
        })
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    );
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

  editPersonInfo(personData: any): void {
    this.person.name = personData.name;
    this.person.email = personData.email;
    this.person.phone = personData.phone;
    
    this.personService.setPerson(1, this.person).subscribe(
      () => {
        console.dir(personData);
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }
}
