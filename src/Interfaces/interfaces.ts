export interface Availability {
  id: string;
  dayOfWeek: string;
  doctor: string; // Doctor's ID
}
export interface Patient {
  patientId: string;
  name: string;
  email: string;
  age: number;
  mobileNo: string;
  adharNo: string;
  gender: string;
  bloodGroup: string;
  pinCode: number;
  description: string;
  address: string;
  appointments: (string | Appointment)[]; // Array of appointment IDs or Appointment objects
}
export interface Appointment {
  appointmentId: string;
  doctor: string; // Doctor's ID
  patient: Patient; // Patient object
  date: string; // Date in string format
  time: string; // Time in string format
  description: string;
  doctorId: string | null; // Optional
  patientId: string | null; // Optional
}
export interface DataRow {
  doctorId: string;
  name: string;
  age: number;
  specialization: string;
  experience: number; // or any other relevant fields
  contactNo: string;
  availability: Availability[]; // Array of Availability objects
  inTiming: string; // Time in string format
  outTiming: string; // Time in string format
  email: string; // Email address
  description: string; // Additional information
  appointments: Appointment[]; // Array of Appointment objects
}
