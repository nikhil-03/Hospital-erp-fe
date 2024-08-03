import { useState } from "react";
import "./Modals.css";
import { Checkbox, Modal } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import { DOCTOR_APIs } from "../../Apis/apiController";

interface FormValue {
  open: boolean;
  handleClose: () => void;
  type: string;
}
const specializations = [
  // will create api for this
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
];
const AddNewDoctorModal: React.FC<FormValue> = ({
  open,
  handleClose,
  type,
}) => {
  const { request } = useAxios<any>();

  const handleSubmitForm = async () => {
    await request({
      url: DOCTOR_APIs,
      data: formData,
      method: "POST",
    }).then(() => {
      handleClose();
    });
  };
  interface FormData {
    name: string;
    email: string;
    age: string;
    contactNo: string;
    experience: string;
    specialization: string;
    inTiming: string;
    outTiming: string;
    description: string;
    availability: Availability[];
  }
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const initialFormData: FormData = {
    name: "",
    email: "",
    age: "",
    contactNo: "",
    experience: "",
    specialization: "default",
    inTiming: "",
    outTiming: "",
    description: "",
    availability: daysOfWeek.map((day) => ({ dayOfWeek: day })),
  };

  const [formData, setFormData] = useState(initialFormData);
  interface Availability {
    dayOfWeek: string;
  }
  const handleDaysChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => {
      let updatedAvailability: Availability[] = [...prevFormData.availability];
      if (checked) {
        updatedAvailability.push({ dayOfWeek: name });
      } else {
        updatedAvailability = updatedAvailability.filter(
          (day) => day.dayOfWeek !== name
        );
      }
      return {
        ...prevFormData,
        availability: updatedAvailability,
      };
    });
    console.log("Final : ", formData);
  };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log("Final : ", formData);
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
            <div className="signup-form-user">
              <div className="input-left-container">
                <input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Full Name"
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={handleFormChange}
                />
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  onChange={handleFormChange}
                />

                <input
                  type="time"
                  id="appt"
                  name="inTiming"
                  placeholder="In-Time"
                  value={formData.inTiming}
                  className="clock clock-in"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Experience"
                  onChange={handleFormChange}
                />
                <input
                  type="mobile"
                  name="contactNo"
                  id="mobile"
                  placeholder="Mobile"
                  onChange={handleFormChange}
                />
                <select
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleFormChange}
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
                  type="time"
                  id="appt"
                  name="outTiming"
                  placeholder="In-Time"
                  value={formData.outTiming}
                  className="clock clock-out"
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <input
              type="description"
              name="description"
              id="description"
              placeholder="Description"
              onChange={handleFormChange}
            />
            <div className="checkbox-main-container">
              <div className="checkbox-container">
                <label className="label-style">M</label>
                <Checkbox
                  name="Monday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Monday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">T</label>
                <Checkbox
                  name="Tuesday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Tuesday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">W</label>
                <Checkbox
                  name="Wednesday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Wednesday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">T</label>
                <Checkbox
                  name="Thursday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Thursday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">F</label>
                <Checkbox
                  name="Friday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Friday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">S</label>
                <Checkbox
                  name="Saturday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Saturday"
                  )}
                />
              </div>
              <div className="checkbox-container">
                <label className="label-style">S</label>
                <Checkbox
                  name="Sunday"
                  onChange={handleDaysChange}
                  className="day-select-checkbox"
                  checked={formData.availability.some(
                    (avail) => avail?.dayOfWeek === "Sunday"
                  )}
                />
              </div>
            </div>
            <div className="signup-form-login-btn">
              <button onClick={handleSubmitForm} className="btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewDoctorModal;
