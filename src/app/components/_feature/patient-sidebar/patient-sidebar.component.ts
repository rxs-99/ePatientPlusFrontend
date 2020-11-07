import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent implements OnInit {
  person_id: string;

  constructor(authService: AuthService) { }

  ngOnInit(): void {
    this.person_id = localStorage.getItem("person_id");
  }

}
