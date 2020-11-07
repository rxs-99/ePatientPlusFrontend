import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { GetPatientService } from 'src/app/services/get-patient.service';
import { ResponseBubbleService } from 'src/app/services/response-bubble.service';
import { ResponseBubble } from 'src/app/ui/response_bubble';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  responseBubble: ResponseBubble;

  personId: number;
  person: Person = new Person(0, "", "", "", null);

  constructor(private personService: GetPatientService, private responseBubbleService: ResponseBubbleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.responseBubble = this.responseBubbleService.getBubble();
    this.responseBubbleService.setBubble(null);
    
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

  clearResponseBubble() {
    this.responseBubbleService.setBubble(null);
    this.responseBubble = null;
  }
}
