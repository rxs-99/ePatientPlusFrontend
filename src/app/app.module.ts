import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PrescriptionsInfoComponent } from './components/prescriptions-info/prescriptions-info.component';
import { PatientProfileEditComponent } from './components/patient-profile-edit/patient-profile-edit.component';
import { AppointmentSubmissionComponent } from './components/appointment-submission/appointment-submission.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientHomeComponent,
    NurseHomeComponent,
    DoctorHomeComponent,
    PatientInfoComponent,
    PrescriptionsInfoComponent,
    PatientProfileEditComponent,
    AppointmentSubmissionComponent,
    PatientProfileEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
