import "./Modals.css";
import { Modal } from "@mui/material";

interface FormValue {
  open: boolean;
  handleClose: () => void;
  type: string;
}
const specializations = [
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
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                <input type="number" name="age" id="age" placeholder="Age" />
                <input
                  type="mobile"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  placeholder="Experience"
                />
                <select
                  id="specialisation"
                  name="Specialisation"
                  value="default"
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

                <select id="shift" name="Shift" value="default">
                  <option value="default" disabled>
                    Select a Shift
                  </option>
                  <option value="day">D : 10:00-14:00</option>
                  <option value="day">D : 14:00-18:00</option>
                  <option value="day">D : 18:00-20:00</option>
                  <option value="day">D : 20:00-24:00</option>
                  <option value="day">N : 00:00-10:00</option>
                </select>
                <input
                  type="availibility"
                  name="availibility"
                  id="availibility"
                  placeholder="Availibility"
                />
              </div>
            </div>
            <input
              type="description"
              name="description"
              id="description"
              placeholder="Description"
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
