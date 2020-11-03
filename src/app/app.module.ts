import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { DoctorAppointmentActionComponent } from './components/doctor-appointment-action/doctor-appointment-action.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { DoctorMedicationComponent } from './components/doctor-medication/doctor-medication.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientHomeComponent,
    NurseHomeComponent,
    DoctorHomeComponent,
    LoginComponent,
    DoctorAppointmentsComponent,
    DoctorAppointmentActionComponent,
    FilterPipe,
    DoctorMedicationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
