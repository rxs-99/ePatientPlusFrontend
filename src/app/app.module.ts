import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { HttpClientModule } from '@angular/common/http';

import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PrescriptionsInfoComponent } from './components/prescriptions-info/prescriptions-info.component';
import { PatientProfileEditComponent } from './components/patient-profile-edit/patient-profile-edit.component';
import { AppointmentSubmissionComponent } from './components/appointment-submission/appointment-submission.component';

import { LoginComponent } from './components/login/login.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { DoctorMedicationComponent } from './components/doctor-medication/doctor-medication.component';
import { PatientHeaderComponent } from './components/_feature/patient-header/patient-header.component';
import { PatientSidebarComponent } from './components/_feature/patient-sidebar/patient-sidebar.component';
import { PatientFooterComponent } from './components/_feature/patient-footer/patient-footer.component';
import { httpInterceptorProviders } from './HTTPInterceptors/interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientHomeComponent,
    NurseHomeComponent,
    DoctorHomeComponent,
    DoctorAppointmentsComponent,
    FilterPipe,
    DoctorMedicationComponent,
    PatientInfoComponent,
    PrescriptionsInfoComponent,
    PatientProfileEditComponent,
    AppointmentSubmissionComponent,
    LoginComponent,
    PatientHeaderComponent,
    PatientSidebarComponent,
    PatientFooterComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
