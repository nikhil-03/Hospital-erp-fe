import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./CommonSideBar.css";
import {
  faBedPulse,
  faBug,
  faCalendarCheck,
  faFileInvoiceDollar,
  faGauge,
  faPersonDotsFromLine,
  faPrescriptionBottleMedical,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
const CommonSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="commonsidebar-container">
      <div
        onClick={() => navigate("/dashboard")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faGauge} />
      </div>
      <div
        onClick={() => navigate("/doctors")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faUserDoctor} />
      </div>
      <div
        onClick={() => navigate("/appointments")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faCalendarCheck} />
      </div>
      <div
        onClick={() => navigate("/patients")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faBedPulse} />
      </div>
      <div
        onClick={() => navigate("/diagnosis")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faPersonDotsFromLine} />
      </div>
      <div
        onClick={() => navigate("/prescriptions")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
      </div>
      <div
        onClick={() => navigate("/medical-store")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faTruckMedical} />
      </div>
      <div
        onClick={() => navigate("/accounts")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
      </div>
      <div
        onClick={() => navigate("/reports")}
        className="sidebar-icons fa-2xl"
      >
        <FontAwesomeIcon icon={faBug} />
      </div>
    </div>
  );
};

export default CommonSideBar;
