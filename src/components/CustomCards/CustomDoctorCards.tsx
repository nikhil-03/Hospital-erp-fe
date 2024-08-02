import "./CustomDoctorCards.css";

interface DoctorProps {
  name: string;
  age: number;
  specialization: string;
  experience: number;
  contact: string;
}

interface CustomDoctorCardsProps {
  props: DoctorProps;
}
//const LandingPageCard: React.FC<LandingPageCardProps> = ({
const CustomDoctorCards: React.FC<CustomDoctorCardsProps> = ({ props }) => {
  console.log("props-inside", props);

  return (
    <section className="container">
      <div className="card">
        <div className="card-image">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
            alt="card image"
          />
        </div>
        <div className="content">
          <h3>{props?.name}</h3>
          <div className="other-information-container">
            <p>{props?.specialization}</p>
            <p style={{ marginLeft: 5, marginRight: 5 }}> | </p>
            <p>Exp : {props?.experience}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDoctorCards;
