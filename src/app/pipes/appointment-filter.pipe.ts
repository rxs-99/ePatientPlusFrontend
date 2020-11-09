import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../models/appointment';

@Pipe({
  name: 'appointmentFilter'
})
export class AppointmentFilterPipe implements PipeTransform {

  transform(items: Appointment[], searchText: string): Appointment[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.patient.name.toLowerCase().includes(searchText);
    });
  }

}
