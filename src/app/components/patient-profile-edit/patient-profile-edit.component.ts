import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';
import { ResponseBubble } from 'src/app/ui/response_bubble';
import { ResponseBubbleService } from 'src/app/services/response-bubble.service';
import * as EmailValidator from 'email-validator';


@Component({
  selector: 'app-patient-profile-edit',
  templateUrl: './patient-profile-edit.component.html',
  styleUrls: ['./patient-profile-edit.component.css']
})
export class PatientProfileEditComponent implements OnInit {
  responseBubble: ResponseBubble;

  personId: number;
  person: Person = new Person(0, "", "", "", null);
  personEditForm: FormGroup;

  constructor(private personService: GetPatientService, private responseBubbleService: ResponseBubbleService, 
    private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.responseBubble = this.responseBubbleService.getBubble();
    this.responseBubbleService.setBubble(null);

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
    // Validation.
    // Regex created by Don Johnston.
	  // https://regexlib.com/REDetails.aspx?regexp_id=607
    let phoneRegex: RegExp = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/

    if(!personData.name) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid name.");
      return;
    } else if(!EmailValidator.validate(personData.email)) {
      console.dir(personData.email);
      this.responseBubble = new ResponseBubble(true, "Please enter a valid email address.");
      return;
    } else if(!phoneRegex.test(personData.phone)) {
      this.responseBubble = new ResponseBubble(true, "Please enter a valid phone.");
      return;
    }

    this.person.name = personData.name;
    this.person.email = personData.email;
    this.person.phone = personData.phone;
    
    this.personService.setPerson(this.personId, this.person).subscribe(
      () => {
        this.router.navigate(['/profile/' + this.personId])
        this.responseBubbleService.setBubble(new ResponseBubble(false, "Your profile was successfully changed."));
      },
      () => {
        console.log("An error has occurred when retrieving Person info.");
      }
    )
  }

  clearResponseBubble() {
    this.responseBubbleService.setBubble(null);
    this.responseBubble = null;
  }
}
