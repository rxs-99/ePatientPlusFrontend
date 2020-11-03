import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Medication } from 'src/app/models/Medication';
import { MedicationService } from 'src/app/services/medication.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-doctor-appointment-action',
  templateUrl: './doctor-appointment-action.component.html',
  styleUrls: ['./doctor-appointment-action.component.css']
})
export class DoctorAppointmentActionComponent implements OnInit {
  @Input() appointment: Appointment;
  
  searchText: string = "";
  
  dosage: number;

  medications: Medication[];
  len: number = 0;

  selectedMedication: Medication;

  constructor(private medicationService: MedicationService, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAllMedications();
    this.len = this.medications.length;
  }

  getAllMedications(): void{
    this.medicationService.getAll().subscribe(
      data => {
        this.medications = data;
        this.len = this.medications.length;
        console.log(this.medications);
      },
      () => {console.log("Uh-Oh!, Couldn't fectch medications! Please try again!")}
    )
  }

  onSelectMedication(medication: Medication): void{
    this.selectedMedication = medication;
    console.log(this.selectedMedication);
  }

  onClickDeny(): void{
    this.appointment.status = "denied";
    console.log(this.appointment);
    this.appointmentService.deleteSelected(this.appointment);
    console.log("after call delete");
    console.log(this.appointment);
  }
}
