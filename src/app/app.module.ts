import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { DoctorAppointmentActionComponent } from './components/doctor/doctor-appointment-action/doctor-appointment-action.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { DoctorMedicationComponent } from './components/doctor-medication/doctor-medication.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorHeaderComponent } from './components/doctor/doctor-header/doctor-header.component';
import { DoctorFooterComponent } from './components/doctor/doctor-footer/doctor-footer.component';
import { DoctorOptionsComponent } from './components/doctor/doctor-options/doctor-options.component';

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
    DoctorComponent,
    DoctorHeaderComponent,
    DoctorFooterComponent,
    DoctorOptionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
