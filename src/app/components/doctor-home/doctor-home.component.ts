import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  options: string[] = [
    "Appointments",
    "Medications",
    "Profile",
    "Log Out"
  ];

  selected_option: string;

  appointmentsVisibility: boolean;
  medicationsVisibility: boolean;
  profileVisibility: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSelect(selected_option: string): void {
    this.selected_option = selected_option;

    if (selected_option === 'Appointments') {
      this.setAllVisibilityFalse();
      this.appointmentsVisibility = true;
    } else if (selected_option === 'Medications') {
      this.setAllVisibilityFalse();
      this.medicationsVisibility = true;
    } else if (selected_option === 'Log Out') {
      this.logout();
    } else if (selected_option === 'Profile'){
      this.setAllVisibilityFalse();
      this.profileVisibility = true;
    }
  }

  setAllVisibilityFalse(): void{
    this.appointmentsVisibility = false;
    this.medicationsVisibility = false;
    this.profileVisibility = false;
  }

  logout(): void {
    this.authService.logOut();
  }

}
