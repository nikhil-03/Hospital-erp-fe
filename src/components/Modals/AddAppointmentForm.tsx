import { useEffect, useState } from "react";
import "./Modals.css";
import { Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import useAxios from "../../hooks/useAxios";
import { PATIENT_APIs } from "../../Apis/apiController";
import { Doctor } from "../../Interfaces/interfaces";
import axios from "axios";
// import { PATIENT_APIs } from "../../Apis/apiController";

interface FormValue {
  open: boolean;
  handleClose: () => void;
  type: string;
}

const specializations = [
  // will create api for this
  "General",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Orthopedics",
  "Neorology",
];
const getCurrentDateInIST = () => {
  const currentDate = new Date();
  const istDate = new Date(currentDate.getTime() + 5.5 * 60 * 60 * 1000);
  const year = istDate.getUTCFullYear();
  const month = String(istDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(istDate.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const defaultDate = getCurrentDateInIST();

const AddNewAppointment: React.FC<FormValue> = ({
  open,
  handleClose,
  type,
}) => {
  const { request } = useAxios<Doctor[]>();
  const [formData, setFormData] = useState({
    date: defaultDate,
    time: "",
    description: "",
    doctorId: "",
    patientId: "",
  });
  const [view, setView] = useState(0);
  const [focusDoctor, setFocusDoctor] = useState("");
  const [focusPatient, setFocusPatient] = useState("");

  const [apiResponseDoctors, setApiResponseDoctors] = useState([
    {
      doctorId: "",
      name: "",
      specialization: "",
      inTiming: "",
      availability: [],
    },
  ]);
  const [apiResponsePatient, setApiResponsePatient] = useState([
    {
      patientId: "",
      name: "",
      email: "",
      age: 0,
      mobileNo: "",
      adharNo: "",
    },
  ]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/doctors/appointment",
    }).then((data) => {
      setApiResponseDoctors(data.data);
    });
    axios({
      method: "GET",
      url: "http://localhost:8080/patients/appointment",
    }).then((data) => {
      setApiResponsePatient(data.data);
    });
  }, []);
  const [doctorList, setDoctorList] = useState(apiResponseDoctors);
  const [patientList, setPatientList] = useState(apiResponsePatient);
  //   const { request } = useAxios();

  const handleSubmit = () => {
    request({
      url: "http://localhost:8080/appointments",
      method: "POST",
      data: formData,
    }).then((res) => {
      console.log(res);
      handleClose();
    });
    //   .catch((err) => console.log(err));
    console.log("formData", formData);
  };

  const getDoctorInformationUsingId = (Id: string) => {
    const doctorInfo = apiResponseDoctors.find(
      (doctor) => doctor?.doctorId === Id
    );
    // console.log("getDoctorInformationUsingId", doctorInfo, "->", Id);
    return doctorInfo;
  };
  const getPatientInformationUsingId = (Id: string) => {
    const patientInfo = apiResponsePatient.find(
      (patient) => patient?.patientId === Id
    );
    // console.log("getDoctorInformationUsingId", doctorInfo, "->", Id);
    return patientInfo;
  };

  const handleFormValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, id } = e.target;

    setDoctorList(apiResponseDoctors);
    setPatientList(apiResponsePatient);
    if (id === "doctor") {
      setFormData((prev) => {
        return { ...prev, doctorId: "" };
      });
    }
    if (id === "patient") {
      setFormData((prev) => {
        return { ...prev, patientId: "" };
      });
    }
    // console.log("name: ", name, " value : ", value, "ID : ", id);
    if (name === "date") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    if (id === "doctor") {
      const filterdata = apiResponseDoctors?.filter((doctor) => {
        if (name === "name") {
          return _.includes(doctor.name.toLowerCase(), value.toLowerCase());
        }
        if (name === "specialization" && value === "General") {
          return apiResponseDoctors;
        }
        if (name === "specialization") {
          return _.includes(
            doctor.specialization.toLowerCase(),
            value.toLowerCase()
          );
        } else return apiResponseDoctors;
      });
      setDoctorList(filterdata);
      //   console.log("Output FormData: ", formData), "->", filterdata;
    }
    if (id === "patient") {
      const filterdata = apiResponsePatient?.filter((patient) => {
        if (name === "patientName") {
          return _.includes(patient.name.toLowerCase(), value.toLowerCase());
        }
        if (name === "mobileNo") {
          return _.includes(
            patient.mobileNo.toLowerCase(),
            value.toLowerCase()
          );
        }
        if (name === "adharNo") {
          return _.includes(patient.adharNo.toLowerCase(), value.toLowerCase());
        } else return apiResponsePatient;
      });
      setPatientList(filterdata);
    }
  };
  const handleOptionClick = (name: string, value: string) => {
    setDoctorList([]);
    setPatientList([]);
    // console.log("11name: ", name, " value : ", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("tiime", getDoctorInformationUsingId(value)?.inTiming);
    if (getDoctorInformationUsingId(value)?.inTiming) {
      setFormData((prevData) => ({
        ...prevData,
        time: getDoctorInformationUsingId(value)?.inTiming || "",
      }));
    }
    console.log("FormData", formData);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="signup-form-container">
          <div className="closeButtonContainer">
            <button onClick={handleClose} className="close-btn">
              X
            </button>
          </div>
          <div className="signup-form-box">
            <h1 className="form-heading">Add New {type}</h1>
            <input
              type="date"
              id="date"
              name="date"
              className="clock appointment-input"
              value={defaultDate}
              defaultValue={defaultDate}
              onChange={handleFormValueChange}
            />
            <span>
              <FontAwesomeIcon
                icon={faArrowsRotate}
                style={{ color: "white" }}
                onClick={() => setView(0)}
              />
            </span>
            <div className="signup-form-user">
              {view === 0 && (
                <div>
                  <div className="persona-heading-container">
                    <h3 className="persona-heading">Doctor Info</h3>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="doctor"
                    placeholder="Doctor's Name"
                    onChange={handleFormValueChange}
                    onFocus={() => setFocusDoctor("doctorname")}
                    value={
                      getDoctorInformationUsingId(formData?.doctorId)?.name
                    }
                  />
                  {focusDoctor === "doctorname" && doctorList && (
                    <ul className="suggestion-container">
                      {doctorList.length != 0 &&
                        doctorList?.map((option) => (
                          <li
                            key={option.name}
                            onClick={() =>
                              handleOptionClick("doctorId", option?.doctorId)
                            }
                            className="suggestion-container-li"
                          >
                            {option.name}
                          </li>
                        ))}
                    </ul>
                  )}

                  <select
                    id="doctor"
                    name="specialization"
                    value={
                      getDoctorInformationUsingId(formData?.doctorId)
                        ?.specialization
                    }
                    onFocus={() => setFocusDoctor("specialization")}
                    onChange={handleFormValueChange}
                  >
                    <option value="default" disabled>
                      Select a Specialization
                    </option>
                    {specializations.map((specialization, index) => (
                      <option key={index} value={specialization}>
                        {specialization}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="inTiming"
                    id="doctor"
                    placeholder="Doctor's In Time"
                    onChange={handleFormValueChange}
                    disabled
                    value={
                      getDoctorInformationUsingId(formData?.doctorId)?.inTiming
                    }
                  />
                </div>
              )}
              {/* -----------------------WORKING---------------------- */}
              {view === 1 && (
                <div>
                  <div className="persona-heading-container">
                    <h3 className="persona-heading">Patient Info</h3>
                  </div>

                  <input
                    type="text"
                    name="patientName"
                    id="patient"
                    placeholder="Patient's Name"
                    onChange={handleFormValueChange}
                    onFocus={() => setFocusPatient("patientname")}
                    value={
                      getPatientInformationUsingId(formData?.patientId)?.name
                    }
                  />
                  {focusPatient === "patientname" && patientList && (
                    <ul className="suggestion-container">
                      {patientList.length != 0 &&
                        patientList?.map((option) => (
                          <li
                            key={option.name}
                            onClick={() =>
                              handleOptionClick("patientId", option?.patientId)
                            }
                            className="suggestion-container-li"
                          >
                            {option.name}
                          </li>
                        ))}
                    </ul>
                  )}

                  <input
                    type="text"
                    name="mobileNo"
                    id="patient"
                    placeholder="Mobile Number"
                    onChange={handleFormValueChange}
                    onFocus={() => setFocusPatient("mobileno")}
                    value={
                      getPatientInformationUsingId(formData?.patientId)
                        ?.mobileNo
                    }
                  />
                  {focusPatient === "mobileno" && patientList && (
                    <ul className="suggestion-container">
                      {patientList.length != 0 &&
                        patientList?.map((option) => (
                          <li
                            key={option.name}
                            onClick={() =>
                              handleOptionClick("patientId", option?.patientId)
                            }
                            className="suggestion-container-li"
                          >
                            {option.mobileNo}
                          </li>
                        ))}
                    </ul>
                  )}
                  <input
                    type="text"
                    name="adharNo"
                    id="patient"
                    placeholder="Adhar Number"
                    onChange={handleFormValueChange}
                    onFocus={() => setFocusPatient("adharno")}
                    value={
                      getPatientInformationUsingId(formData?.patientId)?.adharNo
                    }
                  />
                  {focusPatient === "adharno" && patientList && (
                    <ul className="suggestion-container">
                      {patientList.length != 0 &&
                        patientList?.map((option) => (
                          <li
                            key={option.name}
                            onClick={() =>
                              handleOptionClick("patientId", option?.patientId)
                            }
                            className="suggestion-container-li"
                          >
                            {option.adharNo}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <input
              type="text"
              name="description"
              id="patient"
              placeholder="Appointment Description"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <div className="signup-form-login-btn">
              {view === 0 && (
                <button onClick={() => setView(1)} className="btn">
                  Select Patient
                </button>
              )}
              {view === 1 && (
                <button onClick={handleSubmit} className="btn">
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewAppointment;
