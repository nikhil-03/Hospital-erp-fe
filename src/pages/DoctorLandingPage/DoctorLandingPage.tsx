import { Breadcrumbs } from "@mui/material";
import CustomDataGrid from "../../components/CustomDataGrid/CustomDataGrid";
import "./DoctorLandingPage.css";
import { useNavigate } from "react-router-dom";
function DoctorLandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <div onClick={() => navigate("/")}>HOME</div>
          <div>DOCTOR</div>
        </Breadcrumbs>
      </div>

      <div className="doctor-list-container">
        <CustomDataGrid />
      </div>
    </div>
  );
}

export default DoctorLandingPage;
