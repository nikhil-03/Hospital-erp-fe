import { Breadcrumbs } from "@mui/material";
import CustomDataGrid from "../../components/CustomDataGrid/CustomDataGrid";
import "./DoctorLandingPage.css";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { DOCTOR_APIs } from "../../Apis/apiController";
interface DoctorProps {
  name: string;
  age: number;
  specialization: string;
  experience: number;
  contactNo: string;
}
interface Availability {
  id: string;
  dayOfWeek: string;
  doctor: string; // Doctor's ID
}
interface Patient {
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
interface Appointment {
  appointmentId: string;
  doctor: string; // Doctor's ID
  patient: Patient; // Patient object
  date: string; // Date in string format
  time: string; // Time in string format
  description: string;
  doctorId: string | null; // Optional
  patientId: string | null; // Optional
}
interface DataRow {
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
function DoctorLandingPage() {
  const navigate = useNavigate();

  const { data, loading, request } = useAxios<DataRow[]>();
  useEffect(() => {
    request({
      url: DOCTOR_APIs,
      method: "GET",
    });
  }, []);
  return (
    <div>
      <div>
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <div onClick={() => navigate("/")}>HOME</div>
          <div>DOCTOR</div>
        </Breadcrumbs>
      </div>

      <div className="doctor-list-container">
        {!loading && data && <CustomDataGrid data={data} />}
      </div>
    </div>
  );
}

export default DoctorLandingPage;
