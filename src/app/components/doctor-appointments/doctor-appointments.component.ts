import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Medication } from 'src/app/models/medication';
import { Prescription } from 'src/app/models/prescription';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MedicationService } from 'src/app/services/medication.service';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  searchText: string = "";

  emptyAppointmentFlag: boolean = false;
  pleaseWaitFlag: boolean = false;

  thead: string[] = ["ID", "Name", "Date", "Status", "Comment"];

  appointments: Appointment[];
  appointments_length: number = 0;
  selectedAppointment: Appointment;

  medicationName: string;
  dosage: number;
  medications: Medication[];
  medications_length: number;
  selectedMedication: Medication;

  constructor(private appointmentService: AppointmentService, private medicationService: MedicationService, private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.emptyAppointmentFlag = false;
    this.getAllAppointments();
  }

  getAllAppointments(): void {
    this.appointmentService.getAll().subscribe(
      data => {
        this.appointments = data.filter(
          (element: Appointment) => {
            if (element.status === "approved" && element.doctor.id === +localStorage.getItem("person_id")) {
              return element;
            }
          }
        );
        this.pleaseWaitFlag = false;

        this.appointments_length = this.appointments.length;
        if (this.appointments_length === 0) {
          this.emptyAppointmentFlag = true;
        }
      },
      () => { console.log("Uh-Oh, Couldn't fetch appointments! Please try again!") }
    );
    this.pleaseWaitFlag = true;
  }

  onSelect(selectedAppointment: Appointment): void {
    this.setInputFlagsFalse();
    this.medicationName = null;
    this.dosage = null;
    this.selectedAppointment = selectedAppointment;
    console.log("selected appointment: ");
    console.log(this.selectedAppointment);
    this.getAllMedications();
  }

  removeSelected(): void {

    for (let i: number = 0; i < this.appointments_length; i++) {
      if (this.appointments[i].id === this.selectedAppointment.id) {
        this.appointments.splice(i, 1);
        this.appointments_length--;

        if (this.appointments_length === 0) {
          this.emptyAppointmentFlag = true;
        }

        break;
      }
    }
    this.selectedAppointment = null;
  }

  onClickDeny(): void {
    this.selectedAppointment.status = "denied";
    this.appointmentService.update(this.selectedAppointment).subscribe(val => console.log(val));
    this.removeSelected();
    console.log("after deleting");
    console.log(this.selectedAppointment);
  }

  getAllMedications(): void {
    this.medicationService.getAll().subscribe(
      data => {
        this.medications = data;
        this.medications_length = this.medications.length;
        console.log("get all medications: ");
        console.log(this.medications);
      },
      () => { console.log("Uh-Oh!, Couldn't fectch medications! Please try again!") }
    )
  }

  medicationSelect(name: string): void {
    this.selectedMedication = this.medications.filter(data => data.name.includes(name))[0];
    console.log("medication selected for prescription: ")
    console.log(this.selectedMedication);
  }

  invalidMedicationNameFlag: boolean = false;
  minValueFlag: boolean = false;
  maxValueFlag: boolean = false;
  invalidAmountFlag: boolean = false;
  notEnoughMedFlag: boolean = false;
  onPrescribe(): void {
    this.setInputFlagsFalse();

    this.invalidMedicationNameFlag = true;
    for (let med of this.medications) {
      if (med.name === this.medicationName) {
        this.invalidMedicationNameFlag = false;
        break;
      }
    }
    if (!(/^[0-9]*$/.test(this.dosage.toString())))
      this.invalidAmountFlag = true;
    else {
      if (this.dosage > 50)
        this.maxValueFlag = true;
      else if (this.dosage < 1)
        this.minValueFlag = true;
      else {
        if (!this.invalidMedicationNameFlag)
          if ((this.selectedMedication.amountStored - this.dosage) < 0)
            this.notEnoughMedFlag = true;
      }
    }

    console.log("prescribe: ");
    if (!this.invalidMedicationNameFlag && !this.minValueFlag && !this.maxValueFlag && !this.invalidAmountFlag && !this.notEnoughMedFlag) {
      this.selectedAppointment.status = "completed";
      this.selectedMedication.amountStored -= this.dosage;

      let prescription: Prescription = new Prescription(1, this.selectedMedication, this.selectedAppointment.patient, this.selectedAppointment.doctor, this.dosage);

      console.log(this.selectedAppointment);
      this.appointmentService.update(this.selectedAppointment).subscribe(val => console.log(val));
      this.medicationService.update(this.selectedMedication).subscribe(val => console.log(val));
      this.prescriptionService.add(prescription).subscribe(val => console.log(val));
      this.removeSelected();

      console.log(this.selectedAppointment);
      console.log(this.selectedMedication);
      console.log(prescription);

      this.medicationName = null;
      this.dosage = null;
    }
  }

  onRefresh(): void {
    this.ngOnInit();
  }

  setInputFlagsFalse(): void {
    this.invalidMedicationNameFlag = false;
    this.minValueFlag = false;
    this.maxValueFlag = false;
    this.invalidAmountFlag = false;
    this.notEnoughMedFlag = false;
  }

}
