import { useState } from "react";
import "./Modals.css";
import { Modal } from "@mui/material";

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
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    mobile: "",
    experience: "",
    specialisation: "default",
    shift: "default",
    availibility: "",
    description: "",
  });
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
              <div>
                <input
                  type="text"
                  name="username"
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
                  type="mobile"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
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
                <select
                  id="specialisation"
                  name="specialisation"
                  value={formData.specialisation}
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

                <select
                  id="shift"
                  name="shift"
                  value={formData.shift}
                  onChange={handleFormChange}
                >
                  <option value="default" disabled>
                    Select a Shift
                  </option>
                  <option value="10:00-14:00">D : 10:00-14:00</option>
                  <option value="14:00-18:00">D : 14:00-18:00</option>
                  <option value="18:00-20:00">D : 18:00-20:00</option>
                  <option value="20:00-24:00">D : 20:00-24:00</option>
                  <option value="00:00-10:00">N : 00:00-10:00</option>
                </select>
                <input
                  type="availibility"
                  name="availibility"
                  id="availibility"
                  placeholder="Availibility"
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
            <div className="signup-form-login-btn">
              <button className="btn">
                {" "}
                <a href="succes.html"> Add</a>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewDoctorModal;
