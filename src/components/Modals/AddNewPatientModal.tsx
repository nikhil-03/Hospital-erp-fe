import { useState } from "react";
import "./Modals.css";
import { Modal } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import { PATIENT_APIs } from "../../Apis/apiController";

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
  const { request } = useAxios();
  const handleSubmit = () => {
    request({
      url: PATIENT_APIs,
      method: "POST",
      data: formData,
    }).then((res) => {
      console.log(res);
      handleClose();
    });
  };
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    age: "",
    mobileNo: "",
    adharNo: "",
    gender: "default",
    bloodGroup: "",
    pinCode: "",
    address: "",
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
                  name="name"
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
                  type="text"
                  name="mobileNo"
                  id="mobile"
                  placeholder="Mobile"
                  onChange={handleFormValueChange}
                />
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={handleFormValueChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="adharNo"
                  id="adhar-no"
                  placeholder="Adhar Number"
                  onChange={handleFormValueChange}
                />

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
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
                  name="pinCode"
                  id="pincode"
                  placeholder="PINCODE"
                  onChange={handleFormValueChange}
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={handleFormValueChange}
                />
              </div>
            </div>

            <div className="signup-form-login-btn">
              <button onClick={handleSubmit} className="btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewPatientModal;
