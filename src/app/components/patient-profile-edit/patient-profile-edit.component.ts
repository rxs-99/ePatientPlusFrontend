import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';

@Component({
  selector: 'app-patient-profile-edit',
  templateUrl: './patient-profile-edit.component.html',
  styleUrls: ['./patient-profile-edit.component.css']
})
export class PatientProfileEditComponent implements OnInit {
  personId: number;
  person: Person = new Person(0, "", "", "", null);
  personEditForm: FormGroup;

  constructor(private personService: GetPatientService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.personEditForm = this.formBuilder.group({
      "name": "",
      "email": "",
      "phone": ""
    });

    this.personService.getPerson(this.personId).subscribe(
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
