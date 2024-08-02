import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <div className="commonsidebar-container">
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faGauge} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faUserDoctor} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faCalendarCheck} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faBedPulse} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faPersonDotsFromLine} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faTruckMedical} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
      </div>
      <div className="sidebar-icons fa-2xl">
        <FontAwesomeIcon icon={faBug} />
      </div>
    </div>
  );
};

export default CommonSideBar;
