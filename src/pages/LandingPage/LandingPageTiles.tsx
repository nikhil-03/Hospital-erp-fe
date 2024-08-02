import "./landingPage.css";
import LandingPageCard from "../../components/LandingPageCards/LandingPageCard";
const LandingPageTiles = () => {
  return (
    <div className="tiles-container">
      <div className="tiles">
        <LandingPageCard
          title="Dashboard"
          description="This is dashboard description"
          imageUrl="dashboard-image.jpeg"
          navPath="/dashboard"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Doctors"
          description="This is dashboard description"
          imageUrl="doctor-image.jpeg"
          navPath="/doctors"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Appointments"
          description="This is dashboard description"
          imageUrl="appointment-image.jpeg"
          navPath="/appointments"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Patients"
          description="This is dashboard description"
          imageUrl="patient-image.jpeg"
          navPath="/patients"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Diagnosis"
          description="This is dashboard description"
          imageUrl="diagnosis-image.jpeg"
          navPath="/diagnosis"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Prescription"
          description="This is dashboard description"
          imageUrl="prescription-image.jpeg"
          navPath="prescription"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Medical Store"
          description="This is dashboard description"
          imageUrl="medical-store-image.jpeg"
          navPath="medical-store"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Accounts"
          description="This is dashboard description"
          imageUrl="account-image.jpeg"
          navPath="accounts"
        />
      </div>
      <div className="tiles">
        <LandingPageCard
          title="Reports"
          description="This is dashboard description"
          imageUrl="medical-report-image.jpeg"
          navPath="/reports"
        />
      </div>
    </div>
  );
};

export default LandingPageTiles;
