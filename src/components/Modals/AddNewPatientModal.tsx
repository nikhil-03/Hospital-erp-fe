import { useState } from "react";
import "./Modals.css";
import { Modal } from "@mui/material";

interface FormValue {
  open: boolean;
  handleClose: () => void;
  type: string;
}

const AddNewPatientModal: React.FC<FormValue> = ({
  open,
  handleClose,
  type,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    mobile: "",
    adharNumber: "",
    gender: "default",
    bloodGroup: "",
    pincode: "",
    description: "",
  });
  const handleFormValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // console.log("name: ", name, " value : ", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Output : ", formData);
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
                  onChange={handleFormValueChange}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={handleFormValueChange}
                />
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  onChange={handleFormValueChange}
                />
                <input
                  type="mobile"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  onChange={handleFormValueChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="adharNumber"
                  id="adhar-no"
                  placeholder="Adhar Number"
                  onChange={handleFormValueChange}
                />

                <select
                  id="gender"
                  name="gender"
                  value="default"
                  onChange={handleFormValueChange}
                >
                  <option value="default" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="mix">Others</option>
                </select>
                <input
                  type="text"
                  name="bloodGroup"
                  id="blood-group"
                  placeholder="Blood Group"
                  onChange={handleFormValueChange}
                />
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  placeholder="PINCODE"
                  onChange={handleFormValueChange}
                />
              </div>
            </div>
            <input
              type="description"
              name="description"
              id="description"
              placeholder="Description"
              onChange={handleFormValueChange}
            />

            <div className="signup-form-login-btn">
              <button className="btn">Add</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewPatientModal;
