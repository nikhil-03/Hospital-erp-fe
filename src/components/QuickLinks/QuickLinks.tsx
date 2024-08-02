import { useState } from "react";
import "./QuickLinks.css";
import Button from "@mui/material/Button";
import AddNewDoctorModal from "../Modals/AddNewDoctorForm";
import AddNewPatientModal from "../Modals/AddNewPatientModal";
const QuickLinks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
  const [persona, setPersona] = useState("");
  return (
    <>
      <div className="quicklinks-container">
        <h3 className="quick-links-heading">Quick Links</h3>
        <div className="button-div">
          <Button
            onClick={() => {
              setModalOpen(true);
              setPersona("Appointment");
            }}
            className="quick-link-button"
          >
            Add Appintment
          </Button>
        </div>
        <div className="button-div">
          <Button
            onClick={() => {
              setModalOpen(true);
              setPersona("Patient");
            }}
            className="quick-link-button"
          >
            Add Patient
          </Button>
        </div>
        <div className="button-div">
          <Button
            onClick={() => {
              setModalOpen(true);
              setPersona("Doctor");
            }}
            className="quick-link-button"
          >
            Add Doctor
          </Button>
        </div>
        <div className="button-div">
          <Button
            onClick={() => {
              setModalOpen(true);
              setPersona("Prescription");
            }}
            className="quick-link-button"
          >
            Add Prescription
          </Button>
        </div>
      </div>
      <div>
        {persona === "Doctor" && (
          <AddNewDoctorModal
            open={modalOpen}
            handleClose={handleClose}
            type={persona}
          />
        )}
        {persona === "Patient" && (
          <AddNewPatientModal
            open={modalOpen}
            handleClose={handleClose}
            type={persona}
          />
        )}
      </div>
    </>
  );
};

export default QuickLinks;
