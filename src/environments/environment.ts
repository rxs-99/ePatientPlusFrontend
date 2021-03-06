// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  addPrescription: "http://localhost:8080/ePatient/prescription/add",
  getAllPrescriptions: "http://localhost:8080/ePatient/prescription/all",
  getAllMedications: "http://localhost:8080/ePatient/medication/all",
  addMedication: "http://localhost:8080/ePatient/medication/add",
  updateMedication: "http://localhost:8080/ePatient/medication/update",
  getAllAppointments: "http://localhost:8080/ePatient/appointment/all",
  updateAppointment: "http://localhost:8080/ePatient/appointment/update",
  createAppointment: "http://localhost:8080/ePatient/appointment/new",
  getPerson:"http://localhost:8080/ePatient/person/get/",
  getDoctors:"http://localhost:8080/ePatient/person/get_doctors",
  getAllPatients: "http://localhost:8080/ePatient/person/get/patients",
  editPerson: "http://localhost:8080/ePatient/person/edit",
  login: "http://localhost:8080/ePatient/login",
  getPendingAppointments: "http://localhost:8080/ePatient/appointment/status/pending"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
