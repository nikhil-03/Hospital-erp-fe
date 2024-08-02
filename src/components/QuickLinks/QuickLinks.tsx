import "./QuickLinks.css";
import Button from "@mui/material/Button";
const QuickLinks = () => {
  return (
    <div className="quicklinks-container">
      <h3 className="quick-links-heading">Quick Links</h3>
      <div className="button-div">
        <Button className="quick-link-button">Add Appintment</Button>
      </div>
      <div className="button-div">
        <Button className="quick-link-button">Add Patient</Button>
      </div>
      <div className="button-div">
        <Button className="quick-link-button">Add Doctor</Button>
      </div>
      <div className="button-div">
        <Button className="quick-link-button">Add Prescription</Button>
      </div>
    </div>
  );
};

export default QuickLinks;
