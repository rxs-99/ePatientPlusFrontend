import { AppointmentFilterPipe } from './appointment-filter.pipe';

describe('AppointmentFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new AppointmentFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
